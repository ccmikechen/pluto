defmodule Pluto.Repo.Migrations.AddReplyIdToPosts do
  use Ecto.Migration

  def change do
    alter table(:posts) do
      add :reply_id, references(:posts)
    end
  end
end
