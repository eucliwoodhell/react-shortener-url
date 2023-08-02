FROM node:18-buster-slim
WORKDIR /app

COPY . /app
RUN npm ci
RUN npm run build
RUN chmod +x /app/entrypoint.sh

ENV REACT_APP_ENV=dev

EXPOSE 3000
ENTRYPOINT ["/app/entrypoint.sh"]
