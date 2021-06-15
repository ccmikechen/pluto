defmodule PlutoWeb.Schema.Replies do
  @moduledoc false

  use Absinthe.Schema.Notation

  import AbsintheErrorPayload.Payload

  alias Absinthe.Relay.Node.ParseIDs
  alias PlutoWeb.Resolvers.Replies

  object :comment_query do
    field :comments, non_null(list_of(non_null(:post))) do
      resolve(&Replies.comments/3)
    end
  end

  input_object(:create_comment_input) do
    field :content, non_null(:string)
    field :reply_id, non_null(:id)
  end

  object :replies_mutations do
    field :create_comment, non_null(:post_payload) do
      arg(:input, non_null(:create_comment_input))

      middleware(ParseIDs, input: [reply_id: :post])
      resolve(&Replies.create_comment/2)
      middleware(&build_payload/2)
    end
  end
end
