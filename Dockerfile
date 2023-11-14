FROM node
WORKDIR /app
COPY . .
FROM node
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn", "run", "dev"]
