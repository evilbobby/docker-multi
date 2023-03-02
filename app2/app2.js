const appName = "App2"
const port = 3001

console.log(`starting ${appName}`)

const express = require('express')
const app = express()
const db = require('./persistence');
const { v4: uuid } = require('uuid');

app.get('/', (req, res) => {

  console.log("got request");

  const item = {
    id: uuid(),
    name: `todo item ${appName}`,
    completed: false,
  };
 
  db.storeItem(item).then(() =>
    db.getItems().then(rows =>
      console.log("rows: " + rows.length)
    )
  ) 

  res.send(`Hello World! ${appName}`)
})

db.init().then(() => {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}).catch((err) => {
  console.error(err);
  process.exit(1);
});


const gracefulShutdown = () => {
  db.teardown()
    .catch(() => { })
    .then(() => process.exit());
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown); // Sent by nodemon