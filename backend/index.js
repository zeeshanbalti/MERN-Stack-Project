const express = require('express')
const app = express()
const port = 5000
const mongoDb = require('./db')
mongoDb()
app.get('/', (req, res) => {
  res.send('Hello Baltistani!')
});
app.use(express.json());
const createUserRoute = require('./Routes/CreateUser');
app.use('/api', createUserRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})