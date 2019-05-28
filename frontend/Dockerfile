FROM node

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3001

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=3001

ENTRYPOINT [ "npm", "run", "dev" ]