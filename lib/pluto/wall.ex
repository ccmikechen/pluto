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

  def create_post(attrs) do
    %Post{}
    |> Post.changeset(attrs)
    |> Repo.insert()
  end

  def get_post(id) do
    Repo.get(Post, id)
  end

  def data do
    Dataloader.Ecto.new(Repo)
  end
end
