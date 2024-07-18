#stage 1 : build from node docker
FROM node:20-alpine AS builder

#set working directory
WORKDIR /app

#Copy package.json and package-lock.json
COPY package*.json ./

#Install the depedencies
RUN npm install

# COPY the rest of the files
COPY . .

#Start App
CMD ["npm", "run", "dev"]