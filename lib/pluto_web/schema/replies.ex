defmodule PlutoWeb.Schema.Replies do
  @moduledoc false

  use Absinthe.Schema.Notation

  import AbsintheErrorPayload.Payload
  import Absinthe.Relay.Node, only: [to_global_id: 2]

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

  object :replies_subscription do
    field :new_comment, non_null(:post) do
      arg(:post_id, non_null(:id))

      config(fn %{post_id: post_id}, _ ->
        {:ok, topic: post_id}
      end)

      trigger(:create_comment,
        topic: fn %{result: %{reply_id: reply_id}} ->
          to_global_id("Post", reply_id)
        end
      )

      resolve(fn %{result: comment}, _, _ ->
        {:ok, comment}
      end)
    end
  end
end
