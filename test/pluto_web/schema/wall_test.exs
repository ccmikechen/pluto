defmodule PlutoWeb.Schema.WallTest do
  use PlutoWeb.ConnCase

  import Pluto.Factory

  describe "listPosts query" do
    @query """
    {
      listPosts{
        content
        insertedAt
      }
    }
    """

    test "returns list of post", %{conn: conn} do
      %{content: content, inserted_at: inserted_at} = insert(:post)

      conn =
        post(conn, "/api", %{
          "query" => @query
        })

      expected_posts = [
        %{
          "content" => content,
          "insertedAt" => NaiveDateTime.to_iso8601(inserted_at)
        }
      ]

      assert json_response(conn, 200) == %{
               "data" => %{"listPosts" => expected_posts}
             }
    end
  end
end
