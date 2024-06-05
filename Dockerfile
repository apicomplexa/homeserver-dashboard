FROM node:22-alpine3.19
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN rm -rf build
RUN npm run build
