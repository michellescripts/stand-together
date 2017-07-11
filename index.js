const express = require('express')
const path = require('path')
const app = express()
const shortid = require('shortid')

app.use((req, res, next) => {
  console.log(req.url, 'was requested')
  next()
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'stand-together-react', 'build')))
}

app.get('/standup/*', (req, res) => {
  console.log('new stand up page created')
  res.sendFile(path.join(__dirname, 'stand-together-react', 'build', 'index.html'))
})

app.get('/api/standup/:id', (req, res) => {
  console.log('hit here')
  res.json({topics: ['Events', 'Interestings', 'Announce.', 'Resources']})
})

app.get('/new', (req, res) => {
  console.log('hit new standup')
  let id = shortid.generate()
  res.redirect('/standup/' + id)
})

app.get('*', (req, res) => {
  console.log('hit 404 on * route')
  res.send('404', 404)
})

const port = process.env.PORT || 5000
app.listen(port)
console.log('listening here ', port)
