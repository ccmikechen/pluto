defmodule PlutoWeb.Schema.Replies do
  @moduledoc false

  use Absinthe.Schema.Notation

  alias PlutoWeb.Resolvers.Replies

  object :comment_query do
    field :comments, list_of(:post) do
      resolve(&Replies.comments/3)
    end
  end
end
