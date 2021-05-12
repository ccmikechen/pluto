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
end
