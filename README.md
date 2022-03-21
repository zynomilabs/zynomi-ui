# zynomi-ui-web,

Zynomi RPA web frontend

## Pre-requisites

- Node.JS
- NPM
- VS.code editor

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8000 (or change the port in nust.config.js)
$ npm run dev

# build for production and launch server
$ npm run build


# generate static project
$ npm run generate

#launch server
$ npm run start

#build  docker image

docker build -t web.frontend:dev .

#run the docker
docker run -it -p 8000:80 web.frontend:dev

```

## Docker administration

```
# Stop the app / docker
docker-compose -f docker-compose-apps-api.yml down
docker-compose -f docker-compose-apps-fin-demo.yml down

# Remove docker image
docker image rm $(docker images -q 'zynomi/zynomi-api-nodejs')
docker image rm $(docker images -q 'zynomi/zynomi-ui-web')

# Pull new app / docker
docker-compose -f docker-compose-apps-api.yml up -d
docker-compose -f docker-compose-apps-fin-demo.yml up -d
```

# Prettier commands to format html code

```
npx prettier --write .
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

18.189.3.157
5432
zypress_db
zypress_user
zypress_pwd
