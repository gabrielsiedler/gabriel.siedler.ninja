import axios from 'axios'
import { Component } from 'react'
import { validate as ValidateContact } from '../../../shared/validation/contactForm'
import { B, H3 } from '../Common'
import { Button, Counter, Error, Feedback, Input, Label, Spinner, TextArea } from './Form.style'

interface formState {
  loading: boolean
  form: {
    subject?: string
    email?: string
    message?: string
  }
  error: any
  success?: boolean
}

export class Form extends Component {
  state: formState

  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      form: {},
      error: {},
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentWillMount() {
    this.setState({
      form: {},
      success: false,
      error: {},
    })
  }

  onChange(field, value, max) {
    if (value && value.length > max) {
      return
    }

    this.setState({
      form: {
        ...this.state.form,
        [field]: value,
      },
    })
  }

  onSubmit() {
    const { form } = this.state

    const error = ValidateContact(form)

    if (error.hasError) {
      this.setState({
        error,
        success: false,
      })

      return
    }

    this.setState({
      error,
      loading: true,
    })

    axios({
      method: 'post',
      url: '/api/contact',
      headers: {
        'Content-Type': 'application/json',
      },
      data: form,
    })
      .then(() => {
        this.setState({
          loading: false,
          success: true,
          form: {},
        })
      })
      .catch((responseError) => {
        this.setState({
          error: responseError,
          loading: false,
          success: false,
        })
      })
  }

  render() {
    const { form, loading, error, success } = this.state
    const { subject = '', email = '', message = '' } = form

    return (
      <form>
        <H3>
          Let
          {"'"}s talk
        </H3>
        <Label htmlFor="subject">
          Subject
          <Input
            type="text"
            disabled={loading}
            value={subject}
            onChange={(e) => this.onChange(e.target.id, e.target.value, 40)}
            id="subject"
          />
          <Counter>
            {subject.length}
            /40
          </Counter>
        </Label>
        <Label htmlFor="email">
          Email
          <Input
            type="email"
            disabled={loading}
            value={email}
            onChange={(e) => this.onChange(e.target.id, e.target.value, 80)}
            id="email"
          />
          <Counter>
            {email.length}
            /80
          </Counter>
        </Label>
        <Label htmlFor="message" smaller>
          Message
          <TextArea
            id="message"
            value={message}
            disabled={loading}
            onChange={(e) => this.onChange(e.target.id, e.target.value, 500)}
            rows="5"
          />
          <Counter>
            {message.length}
            /500
          </Counter>
        </Label>
        <Button type="button" disabled={loading} onClick={() => this.onSubmit()}>
          {loading && <Spinner>c</Spinner>} Send
        </Button>
        {error.hasError && (
          <Error>
            <B>Error:</B> {error.error}
          </Error>
        )}
        {success && <Feedback>Your message has been sent! Thank you.</Feedback>}
      </form>
    )
  }
}
