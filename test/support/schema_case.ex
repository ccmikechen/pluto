defmodule PlutoWeb.SchemaCase do
  use ExUnit.CaseTemplate

  alias Ecto.Adapters.SQL

  using do
    quote do
      # Import conveniences for testing with connections
      import Absinthe.Phoenix.SubscriptionTest
      import Absinthe.Relay.Node, only: [to_global_id: 2]
      import Plug.Conn
      import Phoenix.ConnTest, except: [connect: 2]
      import Phoenix.ChannelTest
      import PlutoWeb.ChannelCase
      import PlutoWeb.ConnCase
      import PlutoWeb.SchemaCase, only: [assert_subscription: 2]

      alias PlutoWeb.Router.Helpers, as: Routes

      # The default endpoint for testing
      @endpoint PlutoWeb.Endpoint
    end
  end

  setup tags do
    :ok = SQL.Sandbox.checkout(Pluto.Repo)

    unless tags[:async] do
      SQL.Sandbox.mode(Pluto.Repo, {:shared, self()})
    end

    {:ok, conn: Phoenix.ConnTest.build_conn()}
  end

  defmacro assert_subscription(ref, expected_data) do
    quote do
      assert_reply unquote(ref), :ok
      assert_receive %Phoenix.Socket.Message{payload: %{result: %{data: data}}}
      assert expected_data = data
    end
  end
end
