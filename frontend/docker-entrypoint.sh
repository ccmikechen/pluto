#!/bin/sh

yarn install --check-files --network-timeout 100000

exec ${@}
