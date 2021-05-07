# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :pluto,
  ecto_repos: [Pluto.Repo]

# Configures the endpoint
config :pluto, PlutoWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "gQGHLPMO8Zw1fdZ2ihjDO1F0Tf0pf/3Mq4whfO6qYXdB2GGhZnZ6iysxDo+05v9J",
  render_errors: [view: PlutoWeb.ErrorView, accepts: ~w(json), layout: false],
  pubsub_server: Pluto.PubSub,
  live_view: [signing_salt: "0/T4UNg8"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
