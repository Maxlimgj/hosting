#!/bin/bash

export COMPOSE_FILE="/opt/self_hosted/containers/nginx/docker-compose.yml"
export COMPOSE_HTTP_TIMEOUT="300"

docker-compose down
docker-compose up --force-recreate --build -d nginx
docker image prune -f

