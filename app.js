const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Here we go again!')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
