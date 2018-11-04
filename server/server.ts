import * as bugsnag from 'bugsnag'
import express from 'express'
import next from 'next'
import * as path from 'path'
import { api } from './api'

const isProduction = process.env.NODE_ENV === 'production'
const app = next({ dev: !isProduction })
const handle = app.getRequestHandler()

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

app
  .prepare()
  .then(() => {
    const server = express()

    if (isProduction) {
      bugsnag.register(process.env.BUGSNAG_KEY)
    }

    server.get('/robots.txt', (req, res) => res.sendFile(path.join(__dirname, '../static/robots.txt')))
    server.get('/sitemap.xml', (req, res) => res.sendFile(path.join(__dirname, '../static/sitemap.xml')))

    server.use('/api', api)
    server.get('*', (req, res) => handle(req, res))

    server.listen(port, host, (err) => {
      if (err) throw err
      console.info(`|> Ready on http://${host}:${port}`)
      console.info(`|> Environment: ${process.env.NODE_ENV || 'development'}\n`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
