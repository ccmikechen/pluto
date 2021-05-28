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

  post "/db/factory" do
    with {:ok, schema} <- Map.fetch(conn.body_params, "schema"),
         {:ok, attrs} <- Map.fetch(conn.body_params, "attributes") do
      db_schema = String.to_atom(schema)
      db_attrs = Enum.map(attrs, fn {k, v} -> {String.to_atom(k), v} end)
      db_entry = Pluto.Factory.insert(db_schema, db_attrs)
      send_resp(conn, 200, Jason.encode!(%{id: db_entry.id}))
    else
      _ -> send_resp(conn, 401, "schema or attributes missing")
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
