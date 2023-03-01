FROM node:lts

WORKDIR /
COPY package.json /package.json
COPY package-lock.json /package-lock.json 

RUN npm install

COPY . .
CMD ["node", "app1.js"]
EXPOSE 3000