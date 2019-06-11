FROM node

WORKDIR /app

COPY . .

ENV PORT=3500

RUN npm install

EXPOSE $PORT

ENTRYPOINT [ "npm", "run", "dev" ]