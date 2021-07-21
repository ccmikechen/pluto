FROM elixir:1.11.4-alpine as dev
ENV HEX_HTTP_TIMEOUT=1200

WORKDIR /app

RUN mix local.hex --force
RUN mix local.rebar --force

COPY mix.exs mix.lock /app/
RUN mix do deps.get, deps.compile

COPY config /app/config/
COPY priv /app/priv/
COPY test /app/test/
COPY lib /app/lib/

EXPOSE 4000
CMD mix phx.server
