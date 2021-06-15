defmodule Pluto.RepliesTest do
  use Pluto.DataCase

  import Pluto.Factory

  alias Pluto.{Replies, Wall}

  describe "list_comments/1" do
    test "returns list of comments of post" do
      comments = insert_list(3, :post)
      post = insert(:post, comments: comments)

      expected_comment_ids = Enum.map(comments, & &1.id)
      comment_ids = post |> Replies.list_comments() |> Enum.map(& &1.id)

      assert comment_ids == expected_comment_ids
    end
  end

  describe "create_comment/1" do
    test "reply a post successfully" do
      %{id: post_id} = insert(:post)
      content = "content"

      assert {:ok, %Wall.Post{content: ^content, reply_id: ^post_id}} =
               Replies.create_comment(%{content: content, reply_id: post_id})
    end

    test "with invalid reply id" do
      assert {:error, %Ecto.Changeset{}} = Wall.create_post(%{content: "content", reply_id: 0})
    end
  end
end
