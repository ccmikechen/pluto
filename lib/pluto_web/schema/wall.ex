defmodule PlutoWeb.Schema.Wall do
  @moduledoc false

  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation, :modern

  alias PlutoWeb.Resolvers.Wall

  connection(node_type: :post)

  node object(:post) do
    field :content, non_null(:string)
    field :inserted_at, non_null(:naive_datetime)
  end

  object :wall_queries do
    connection field :list_posts, node_type: :post do
      resolve(&Wall.posts/2)
    end
  end
end
