import { ValidationError } from 'error-middleware/errors'
import { validationMiddleware } from 'error-middleware/middlewares'
import express from 'express'
import { ContactService } from '../services/contact'
import { postSchema } from './contact.schema'

const router = express.Router()

router.post('/', validationMiddleware(postSchema), (req, res) => {
  const { subject, email, message } = req.body

  const Contact = new ContactService({ subject, email, message })

  Contact.sendEmail()
    .then(() => res.sendStatus(200))
    .catch((e) => {
      console.log('Contact API error:', e)

      res.sendStatus(200)
    })
})

export const contactApi = router
