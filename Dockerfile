FROM node:18-buster-slim
WORKDIR /app

ADD package.json /app/package.json
ADD dist /app
ADD node_modules /app/node_modules
ADD entrypoint.sh /app/entrypoint.sh

EXPOSE 3000
ENTRYPOINT ["/app/entrypoint.sh"]
