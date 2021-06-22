defmodule PlutoWeb.Schema.Wall do
  @moduledoc false

  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation, :modern

  import AbsintheErrorPayload.Payload
  import_types(AbsintheErrorPayload.ValidationMessageTypes)

  alias Absinthe.Relay.Node.ParseIDs
  alias PlutoWeb.Resolvers.Wall

  connection(node_type: :post)

  node object(:post) do
    field :content, non_null(:string)
    field :inserted_at, non_null(:naive_datetime)

    field :reply_to, :post do
      resolve(&Wall.reply_to/3)
    end

    import_fields(:comment_query)
  end

  input_object(:create_post_input) do
    field :content, non_null(:string)
  end

  payload_object(:post_payload, :post)

  object :wall_queries do
    connection field :list_posts, node_type: :post do
      resolve(&Wall.posts/2)
    end

    field :post, :post do
      arg(:id, non_null(:id))

      middleware(ParseIDs, id: :post)
      resolve(&Wall.post/2)
    end
  end

  object :wall_mutations do
    field :create_post, non_null(:post_payload) do
      arg(:input, non_null(:create_post_input))

      resolve(&Wall.create_post/2)
      middleware(&build_payload/2)
    end
  end
end
