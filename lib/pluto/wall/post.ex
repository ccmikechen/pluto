defmodule Pluto.Wall.Post do
  @moduledoc false

  use Ecto.Schema

  import Ecto.Changeset

  alias Pluto.Wall.Post

  schema "posts" do
    field :content, :string

    belongs_to :reply_to, Post, foreign_key: :reply_id
    has_many :comments, Post, foreign_key: :reply_id

    timestamps()
  end

  def changeset(post, attrs) do
    post
    |> cast(attrs, [:content])
    |> validate_required([:content])
    |> validate_length(:content, max: 500)
  end
end
