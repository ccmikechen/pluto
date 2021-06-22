defmodule PlutoWeb.Resolvers.Wall do
  import Absinthe.Resolution.Helpers

  alias Absinthe.Relay.Connection
  alias Pluto.Wall

  def posts(pagination_args, _) do
    Wall.posts_query(order: :newest)
    |> Connection.from_query(&Pluto.Repo.all/1, pagination_args)
  end

  def reply_to(%{reply_id: reply_id}, _, %{context: %{loader: loader}}) do
    loader
    |> Dataloader.load(Wall, Wall.Post, reply_id)
    |> on_load(fn loader ->
      {:ok, Dataloader.get(loader, Wall, Wall.Post, reply_id)}
    end)
  end

  def create_post(%{input: input}, _) do
    Wall.create_post(input)
  end

  def post(%{id: id}, _) do
    result = Wall.get_post(id)
    {:ok, result}
  end
end
