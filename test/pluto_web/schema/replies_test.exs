defmodule PlutoWeb.Schema.RepliesTest do
  use PlutoWeb.SchemaCase

  import Pluto.Factory

  alias PlutoWeb.UserSocket

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
      node_id = to_global_id("Post", id)

      expected_comments = Enum.map(comments, &%{"id" => to_global_id("Post", &1.id)})

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

  describe "createComment mutation" do
    @query """
    mutation($input: CreateCommentInput!) {
      createComment(input: $input){
        result {
          content
        }
      }
    }
    """

    test "create comment successfully", %{conn: conn} do
      %{id: id} = insert(:post)

      node_id = to_global_id("Post", id)
      input = %{input: %{content: "write something", reply_id: node_id}}

      conn =
        post(conn, "/api", %{
          "query" => @query,
          "variables" => input
        })

      assert json_response(conn, 200) == %{
               "data" => %{"createComment" => %{"result" => %{"content" => "write something"}}}
             }
    end
  end

  describe "newComment subscription" do
    @query """
      subscription($post_id: ID!) {
        newComment(post_id: $post_id) {
          content
          insertedAt
        }
      }
    """

    setup do
      %{id: post_id} = insert(:post)
      post_global_id = to_global_id("Post", post_id)

      {:ok, connection} = connect(UserSocket, %{})
      {:ok, socket} = join_absinthe(connection)

      ref =
        push_doc(socket, @query, %{
          variables: %{post_id: post_global_id}
        })

      [post_global_id: post_global_id, ref: ref]
    end
  end
end
