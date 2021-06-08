defmodule Pluto.Replies do
  alias Pluto.{Repo, Wall}

  def list_comments(%Wall.Post{} = post) do
    Repo.preload(post, :comments).comments
  end
end
