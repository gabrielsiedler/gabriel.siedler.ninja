import * as bodyParser from 'body-parser'
import errorMiddleware from 'error-middleware'
import { NotFoundError } from 'error-middleware/errors'
import express from 'express'
import { contactApi } from './contact'

const router = express.Router()

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.use('/contact', contactApi)

router.use((req, res) => {
  throw new NotFoundError()
})

router.use(errorMiddleware)

export const api = router
