defmodule Pluto.Wall do
  alias Pluto.Repo
  alias Pluto.Wall.Post

  def list_posts do
    Repo.all(Post)
  end
end
