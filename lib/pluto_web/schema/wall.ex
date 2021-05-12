defmodule PlutoWeb.Schema.Wall do
  @moduledoc false

  use Absinthe.Schema.Notation

  alias PlutoWeb.Resolvers.Wall

  object :post do
    field :content, non_null(:string)
    field :inserted_at, :naive_datetime
  end

  object :wall_queries do
    field :list_posts, list_of(:post), resolve: &Wall.posts/2
  end
end
