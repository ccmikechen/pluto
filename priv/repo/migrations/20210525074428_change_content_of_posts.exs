defmodule Pluto.Repo.Migrations.ChangeContentOfPosts do
  use Ecto.Migration

  def change do
    alter table("posts") do
      modify :content, :string, size: 500
    end
  end
end
