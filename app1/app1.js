console.log("starting app 1")

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! App1')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})