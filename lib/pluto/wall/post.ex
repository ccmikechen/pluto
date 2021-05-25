defmodule Pluto.Wall.Post do
  @moduledoc false

  use Ecto.Schema

  import Ecto.Changeset

  schema "posts" do
    field :content, :string

    timestamps()
  end

  def changeset(post, attrs) do
    post
    |> cast(attrs, [:content])
    |> validate_required([:content])
    |> validate_length(:content, max: 500)
  end
end
