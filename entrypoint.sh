#!/usr/bin/env sh
set -e

export TZ=Chile/Continental
ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

exec nodejs --max-old-space-size=200 /app/main.js
