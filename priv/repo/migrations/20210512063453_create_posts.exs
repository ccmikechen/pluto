defmodule Pluto.Repo.Migrations.CreatePosts do
  use Ecto.Migration

  def change do
    create table(:posts) do
      add :content, :string, null: false

      timestamps()
    end
  end
end
