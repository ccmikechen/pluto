defmodule PlutoWeb.Schema.Replies do
  @moduledoc false

  use Absinthe.Schema.Notation

  alias PlutoWeb.Resolvers.Replies

  object :comment_query do
    field :comments, non_null(list_of(non_null(:post))) do
      resolve(&Replies.comments/3)
    end
  end
end
