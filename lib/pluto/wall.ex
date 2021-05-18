defmodule Pluto.Wall do
  import Ecto.Query

  alias Pluto.Repo
  alias Pluto.Wall.Post

  def list_posts do
    Repo.all(Post)
  end

  def posts_query(args), do: posts_query(Post, args)

  def posts_query(query, args) do
    Enum.reduce(args, query, fn
      {:order, :newest}, query ->
        query |> order_by(desc: :inserted_at, desc: :id)

      _, query ->
        query
    end)
  end
end
