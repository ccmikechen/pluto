defmodule Pluto.Wall.Post do
  @moduledoc false

  use Ecto.Schema

  schema "posts" do
    field :content, :string

    timestamps()
  end
end
