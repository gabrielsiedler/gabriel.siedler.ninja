import express from 'express'

const router = express.Router()

export const routes = (app) => {
  router.get('/', (req, res) => {
    app.render(req, res, '/home')
  })

  router.get('/work', (req, res) => {
    app.render(req, res, '/work')
  })

  router.get('/contact', (req, res) => {
    app.render(req, res, '/contact')
  })

  return router
}
