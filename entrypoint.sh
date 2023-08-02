#!/bin/bash
set -e

export TZ=Chile/Continental
ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

cd /app
echo en /app

if [[ $# -eq 0 ]]; then
    exec npx serve build
else
    exec $@
fi
