import express from 'express'
import path from 'path'
import shortid from 'shortid'
import store from './createstore'
import { newStandup } from './action'
import bodyParser from 'body-parser'
var knex = require('./dbconnection')

const app = express()
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@$')

// for websockets
var http = require('http').Server(app)
var io = require('socket.io')(http)
var wsconnections = {}

app.use(bodyParser.json())

// websockets
io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    // remove from connections
    Object.keys(wsconnections).forEach(key => {
      if (wsconnections[key].indexOf(socket.id) !== -1) {
        wsconnections[key].splice(wsconnections[key].indexOf(socket.id), 1)
      }
    })
  })
  socket.on('register', (data) => {
    // add to connections
    if (!wsconnections[data.standupId]) {
      wsconnections[data.standupId] = []
      wsconnections[data.standupId].push(socket.id)
    } else {
      wsconnections[data.standupId].push(socket.id)
    }
  })
  socket.on('addEvent', (data, standupId) => {
    console.log('hitting broadcast')
    socket.broadcast.emit('receive code', data)
  })
  socket.on('removeEvent', (data, standupId) => {
    console.log('hitting broadcast')
    socket.broadcast.emit('receive code', data)
  })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'stand-together-react', 'build')))
}

app.get('/standup/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'stand-together-react', 'build', 'index.html'))
})

// app.get('/api/team/:name', (req, res) => {
//
// })

app.get('/api/team/:name/:date', (req, res) => {
  const todaysDate = new Date().toISOString().slice(0, 10).replace(/-/g, '')
  const state = store.getState()
  const id = `team/${req.params.name}/${req.params.date}`
  if (state.byId.hasOwnProperty(id)) {
    res.json(state.byId[id])
  } else if (req.params.date === todaysDate) {
    store.dispatch(newStandup(id))
    res.json(store.getState().byId[id])
  } else {
    res.status(404).send('standup ' + id + ' does not exist')
  }
})

app.get('/api/standup/:id', (req, res) => {
  // react code makes the fetch
  const state = store.getState()
  const id = req.params.id
  if (state.byId.hasOwnProperty(id)) {
    res.json(state.byId[id])
  } else {
    res.status(404).send('standup ' + id + ' does not exist')
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

app.delete('/api/standup/:id', (req, res) => {
  const action = req.body
  action['id'] = req.params.id
  store.dispatch(action)
  res.status(204).end()
})

app.post('/api/teams/:name', (req, res, next) => {
  knex('teams').select().where({name: req.params.name}).first()
  .then((team) => {
    if (team) {
      res.status(400).end()
    } else {
      knex('teams').insert({name: req.params.name})
      .then(() => {
        res.status(200).end()
      })
    }
  })
})

app.get('*', (req, res) => {
  res.status(404).send('Not Found!')
})

const port = process.env.PORT || 5000
http.listen(port, () => { console.log('listening on ', port) })
