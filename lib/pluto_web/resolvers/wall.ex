defmodule PlutoWeb.Resolvers.Wall do
  alias Pluto.Wall

  def posts(_, _) do
    {:ok, Wall.list_posts()}
  end
end
