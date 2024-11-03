FROM node:latest

COPY ./site /site

WORKDIR /site

RUN npm install

RUN npm audit fix

EXPOSE 3000

CMD ["/bin/bash", "-c", "npx nuxt build;node .output/server/index.mjs"]