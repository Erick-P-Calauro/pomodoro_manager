# Última versão do node-js alpine
FROM node:25-alpine3.22 AS base

# Diretório base do container
WORKDIR /usr/app

COPY . .

# RUN roda o comando no build do container
RUN npm install --frozen-lockfile

EXPOSE 3000

# CMD é um comando rodado apenas na execução do container
CMD ["npm", "run", "start"]
