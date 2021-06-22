defmodule PlutoWeb.Schema.WallTest do
  use PlutoWeb.SchemaCase

  import Pluto.Factory

  describe "listPosts query" do
    @query """
    {
      listPosts(first: 1) {
        edges {
          node {
            content
            insertedAt
            replyTo {
              id
            }
          }
        }
      }
    }
    """

    test "returns list of post with pagination", %{conn: conn} do
      %{id: replied_id} = insert(:post)
      %{content: content, inserted_at: inserted_at} = insert(:post, reply_id: replied_id)
      replied_global_id = to_global_id("Post", replied_id)

      conn =
        post(conn, "/api", %{
          "query" => @query
        })

      expected_posts = %{
        "edges" => [
          %{
            "node" => %{
              "content" => content,
              "insertedAt" => NaiveDateTime.to_iso8601(inserted_at),
              "replyTo" => %{"id" => replied_global_id}
            }
          }
        ]
      }

      assert json_response(conn, 200) == %{
               "data" => %{"listPosts" => expected_posts}
             }
    end
  end

  describe "createPost mutation" do
    @query """
    mutation($input: CreatePostInput!) {
      createPost(input: $input){
        result {
          content
        }
      }
    }
    """

    test "create post successfully", %{conn: conn} do
      input = %{input: %{content: "write something"}}

      conn =
        post(conn, "/api", %{
          "query" => @query,
          "variables" => input
        })

      assert json_response(conn, 200) == %{
               "data" => %{"createPost" => %{"result" => %{"content" => "write something"}}}
             }
    end
  end

  describe "getPost query" do
    @query """
    query($id: ID!) {
      post(id: $id) {
        content
        insertedAt
      }
    }
    """

    test "return post by given id", %{conn: conn} do
      %{id: id, content: content, inserted_at: inserted_at} = insert(:post)
      node_id = to_global_id("Post", id)

      conn =
        post(conn, "/api", %{
          "query" => @query,
          "variables" => %{id: node_id}
        })

      expected_post = %{
        "content" => content,
        "insertedAt" => NaiveDateTime.to_iso8601(inserted_at)
      }

      assert json_response(conn, 200) == %{
               "data" => %{"post" => expected_post}
             }
    end
  end
end
