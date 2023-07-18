FROM node:16.20.0

COPY . /app
WORKDIR /app

RUN npm i

EXPOSE 3000

CMD ["npx", "serve", "-l", "3000",  "-s", "build"]