defmodule Pluto.Plug.TestEndToEnd do
  use Plug.Router

  alias Ecto.Adapters.SQL
  alias Pluto.Repo

  plug :match
  plug :dispatch

  post "/db/checkout" do
    owner_process = Process.whereis(:db_owner_agent)

    if owner_process && Process.alive?(owner_process) do
      send_resp(conn, 200, "connection has already been checked out")
    else
      {:ok, _pid} = Agent.start_link(&checkout_shared_db_conn/0, name: :db_owner_agent)
      send_resp(conn, 200, "checked out database connection")
    end
  end

  post "/db/checkin" do
    owner_process = Process.whereis(:db_owner_agent)

    if owner_process && Process.alive?(owner_process) do
      Agent.get(owner_process, &checkin_shared_db_conn/1)
      Agent.stop(owner_process)
      send_resp(conn, 200, "checked in database connection")
    else
      send_resp(conn, 200, "connection has already been checked back in")
    end
  end

  post "/db/insert_list" do
    with {:ok, schema} <- Map.fetch(conn.body_params, "schema"),
         number <- Map.get(conn.body_params, "number", 1),
         attrs <- Map.get(conn.body_params, "attributes", %{}) do
      schema = String.to_atom(schema)
      attrs = Enum.map(attrs, fn {k, v} -> {String.to_atom(k), v} end)
      entries = Pluto.Factory.insert_list(number, schema, attrs)

      response =
        entries
        |> Enum.map(fn entry ->
          entry |> Map.from_struct() |> Map.delete(:__meta__) |> Map.delete(:__struct__)
        end)
        |> Jason.encode!()

      send_resp(conn, 200, response)
    else
      _ -> send_resp(conn, 400, "schema, number or attributes missing")
    end
  end

  post "/eval" do
    try do
      code = Map.get(conn.body_params, "code", "")
      {result, _} = Code.eval_string(code)
      response = Jason.encode!(%{result: result})

      send_resp(conn, 200, response)
    rescue
      _ ->
        send_resp(conn, 400, "invalid command")
    end
  end

  defp checkout_shared_db_conn do
    :ok = SQL.Sandbox.checkout(Repo, ownership_timeout: :infinity)
    :ok = SQL.Sandbox.mode(Repo, {:shared, self()})
  end

  defp checkin_shared_db_conn(_) do
    :ok = SQL.Sandbox.checkin(Repo)
  end
end
