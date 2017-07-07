const express = require('express')
const path = require('path')
const app = express()
const shortid = require('shortid')

app.use((req, res, next) => {
  console.log(req.url, 'was requested')
  next()
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'stand-together-react', 'build', 'index.html'))
})

app.use(express.static(path.join(__dirname, 'stand-together-react', 'build')))

app.get('/standup/*', (req, res) => {
  console.log('new stand up')
  res.sendFile(path.join(__dirname, 'stand-together-react', 'build', 'index.html'))
})

app.get('/new', (req, res) => {
  console.log('hit new')
  let id = shortid.generate()
  res.redirect('/standup/' + id)
})

app.get('*', (req, res) => {
  console.log('home here')
  res.send('404', 404)
})

const port = process.env.PORT || 5000
app.listen(port)
console.log('listening here ', port)
