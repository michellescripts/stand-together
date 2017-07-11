import express from 'express'
import path from 'path'
import shortid from 'shortid'
import store from './createstore'
import { newStandup } from './action'

const app = express()
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@$')

app.use((req, res, next) => {
  next()
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'stand-together-react', 'build')))
}

app.get('/standup/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'stand-together-react', 'build', 'index.html'))
})

app.get('/api/standup/:id', (req, res) => {
  // react code makes the fetch
  console.log('hit here')
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

app.get('*', (req, res) => {
  res.send('404', 404)
})

const port = process.env.PORT || 5000
app.listen(port)
console.log('listening here ', port)
