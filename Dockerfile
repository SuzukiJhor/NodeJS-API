FROM node:16-slim as BUILDER

LABEL maintainer="Jhordan Suzuki"

WORKDIR /usr/src/app

## Copia tudo que começa com package e termina com .json para dentro da pasta /usr/app
COPY package*.json ./

## Executa npm install para adicionar as dependências e criar a pasta node_modules
RUN npm install

COPY src ./src

FROM node:16-alpine

ARG NODE_ENV

WORKDIR /usr/src/app

COPY --from=BUILDER /usr/src/app/ ./

## Container ficará ouvindo os acessos na porta 3000
EXPOSE 3000

CMD [ "npm" ,"start" ]