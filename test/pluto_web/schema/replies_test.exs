defmodule PlutoWeb.Schema.RepliesTest do
  use PlutoWeb.ConnCase

  import Pluto.Factory

  alias Absinthe.Relay.Node

  describe "listReplies query" do
    @query """
    query($id: ID!) {
      post(id: $id) {
        comments {
          id
        }
      }
    }
    """

    test "get all comments", %{conn: conn} do
      comments = insert_list(3, :post)
      %{id: id} = insert(:post, comments: comments)
      node_id = Node.to_global_id("Post", id)

      expected_comments = Enum.map(comments, &%{"id" => Node.to_global_id("Post", &1.id)})

      conn =
        post(conn, "/api", %{
          "query" => @query,
          "variables" => %{id: node_id}
        })

      assert %{
               "data" => %{"post" => %{"comments" => ^expected_comments}}
             } = json_response(conn, 200)
    end
  end
end
