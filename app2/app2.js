console.log("starting app 1")

const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World! App2')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})