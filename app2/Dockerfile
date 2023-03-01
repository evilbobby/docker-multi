FROM node:lts

WORKDIR /code
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json 

RUN npm install

COPY . /code
CMD ["node", "app2.js"]
EXPOSE 3001