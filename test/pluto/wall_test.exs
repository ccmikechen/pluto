defmodule Pluto.WallTest do
  use Pluto.DataCase

  import Pluto.Factory

  alias Pluto.Wall

  describe "list_posts/0" do
    test "returns list of post" do
      posts = insert_list(3, :post)

      assert Wall.list_posts() == posts
    end
  end

  describe "posts_query/1" do
    test "with empty query args" do
      assert Wall.posts_query([]) == Wall.Post
    end

    test "with latest query args" do
      query =
        from u in Pluto.Wall.Post,
          order_by: [desc: :inserted_at, desc: :id]

      assert Wall.posts_query(order: :newest) |> inspect() == inspect(query)
    end
  end

  describe "create_post/1" do
    test "creates a post successfully" do
      content = "content"

      assert {:ok, %Wall.Post{content: ^content}} = Wall.create_post(%{content: content})
    end

    test "with invalid content" do
      content = String.duplicate("a", 501)

      assert {:error, %Ecto.Changeset{}} = Wall.create_post(%{content: content})
    end
  end

  describe "get_post/1" do
    test "get post by specific id" do
      %{id: id} = insert(:post)

      assert %Wall.Post{id: ^id} = Wall.get_post(id)
    end
  end
end
