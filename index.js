import express from 'express'
import path from 'path'
import shortid from 'shortid'
import store from './createstore'
import { newStandup } from './action'
import bodyParser from 'body-parser'

const app = express()
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@$')

// for websockets
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(bodyParser.json())

// websockets
io.on('connection', (socket) => {
  console.log('a user connected')
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'stand-together-react', 'build')))
}

app.get('/standup/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'stand-together-react', 'build', 'index.html'))
})

app.get('/api/standup/:id', (req, res) => {
  // react code makes the fetch
  const state = store.getState()
  const id = req.params.id
  if (state.byId.hasOwnProperty(id)) {
    res.json(state.byId[id])
  } else {
    res.send('standup ' + id + ' does not exist', 404)
  }
})

app.get('/new', (req, res) => {
  let id = shortid.generate()
  store.dispatch(newStandup(id))
  return res.redirect('/standup/' + id)
})

app.post('/api/standup/:id', (req, res) => {
  const action = req.body
  action['id'] = req.params.id
  store.dispatch(action)
  res.status(204).end()
})

app.get('*', (req, res) => {
  res.send('404', 404)
})

const port = process.env.PORT || 5000
http.listen(port, () => { console.log('listening on ', port) })
