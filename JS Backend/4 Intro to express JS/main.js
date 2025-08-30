const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/About', (req, res) => {
  res.send('Hello About!')
})

app.get('/Contact', (req, res) => {
  res.send('Hello contact us!')
})

// We can also used parameter variable to dynamically access..
app.get('/:slug', (req, res) => {
  // For this URL: http://localhost:3000/Contact?mode=dark&light=low
  console.log(req.params);
  console.log(req.query);

  res.send(`Hello ${req.params.slug}`)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
