import * as bodyParser from 'body-parser'
import express from 'express'
import { contactApi } from './contact'

const router = express.Router()

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.use('/contact', contactApi)

export const api = router
