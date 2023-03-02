FROM node:lts

WORKDIR /
COPY package.json /package.json
COPY package-lock.json /package-lock.json 

RUN npm install

COPY . .
CMD ["node", "src/index.js"]
EXPOSE 3000