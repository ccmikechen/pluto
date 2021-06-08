defmodule Pluto.RepliesTest do
  use Pluto.DataCase

  import Pluto.Factory

  alias Pluto.Replies

  describe "list_comments/1" do
    test "returns list of comments of post" do
      comments = insert_list(3, :post)
      post = insert(:post, comments: comments)

      expected_comment_ids = Enum.map(comments, & &1.id)
      comment_ids = post |> Replies.list_comments() |> Enum.map(& &1.id)

      assert comment_ids == expected_comment_ids
    end
  end
end
