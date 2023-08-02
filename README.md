# React Shortener URL

[![Deployment Pipeline](https://github.com/eucliwoodhell/react-shortener-url/actions/workflows/pipeline.yml/badge.svg)](https://github.com/eucliwoodhell/react-shortener-url/actions/workflows/pipeline.yml)

## Tech

- React
- React-Router
- React-Redux
- React-Bootstrap
- React-Typescript

## How to install
React App is a sample React App created with create-react-app. Requirements: [Node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/).

```sh
cd react-shortener-url
npm install
npm run start:dev
```

For production environments...

```sh
REACT_APP_ENV=dev
```


## Endpoints

| Endpoint | Description | Type |
| --- | --- | --- |
| /link  | Get all Shorten a URL | GET |
| /link/:id | Get by ID Shorten a URL | GET |
| /link | Save Shorten a URL | POST |
| /link/:id | Delete by ID Shorten a URL | DELETE |


## Docker

React shortener is very easy to install and deploy in a Docker container, basic as that.

By default, the Docker will expose use file bash as the entrypoint, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd react-shortener-url
docker build -t react-shortener-url .
docker run -p 3000:3000 react-shortener-url
```

## Color

#fff159
#212245
#d9d9d9
#fcfcfc

