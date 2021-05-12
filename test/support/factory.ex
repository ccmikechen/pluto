defmodule Pluto.Factory do
  @moduledoc false

  use ExMachina.Ecto, repo: Pluto.Repo

  def post_factory do
    %Pluto.Wall.Post{
      content: "I am the first line.\n I am the second line."
    }
  end
end
