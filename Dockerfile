FROM elixir:1.11.4-alpine

WORKDIR /app

COPY mix.exs mix.lock /app

RUN mix local.hex --force
RUN mix local.rebar --force
RUN mix do deps.get, deps.compile

CMD mix phx.server
