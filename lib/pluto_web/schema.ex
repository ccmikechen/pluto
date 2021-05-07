defmodule PlutoWeb.Schema do
  @moduledoc false

  use Absinthe.Schema
  use Absinthe.Relay.Schema, :modern

  node interface do
    resolve_type(fn
      _, _ ->
        nil
    end)
  end

  query do
    node field do
      resolve(fn
        _, _ ->
          {:error, "Unknown node"}
      end)
    end
  end
end
