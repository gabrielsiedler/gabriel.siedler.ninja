import { Component } from 'react';
import axios from 'axios';

import ValidateContact from '../../../shared/validation/contactForm';

import { Label, Input, TextArea, Button, Counter, Spinner, Error, Feedback } from './Form.style';
import { B, H3 } from '../Common';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      form: {},
      error: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(field, value, max) {
    if (value && value.length > max) {
      return;
    }

    this.setState({
      form: {
        ...this.state.form,
        [field]: value,
      },
    });
  }

  onSubmit() {
    const { form } = this.state;

    const error = ValidateContact(form);

    if (error.hasError) {
      this.setState({
        error,
        success: false,
      });

      return;
    }

    this.setState({
      error,
      loading: true,
    });

    axios.post('/api/contact', {
      form,
    })
      .then(() => {
        this.setState({
          loading: false,
          success: true,
          form: {},
        });
      })
      .catch((responseError) => {
        this.setState({
          error: responseError,
          loading: false,
          success: false,
        });
      });
  }

  render() {
    const { form, loading, error, success } = this.state;
    const { subject = '', email = '', message = '' } = form;

    return (
      <form>
        <H3>Let{"'"}s talk</H3>
        <Label htmlFor="subject">
          Subject
          <Input
            type="text"
            disabled={loading}
            value={subject}
            onChange={e => this.onChange(e.target.id, e.target.value, 40)}
            id="subject"
          />
          <Counter>{subject.length}/40</Counter>
        </Label>
        <Label htmlFor="email">
          Email
          <Input
            type="email"
            disabled={loading}
            value={email}
            onChange={e => this.onChange(e.target.id, e.target.value, 80)}
            id="email"
          />
          <Counter>{email.length}/80</Counter>
        </Label>
        <Label htmlFor="message" smaller>
          Message
          <TextArea
            id="message"
            value={message}
            disabled={loading}
            onChange={e => this.onChange(e.target.id, e.target.value, 500)}
            rows="5"
          />
          <Counter>{message.length}/500</Counter>
        </Label>
        <Button type="button" disabled={loading} onClick={() => this.onSubmit()}>
          {loading && <Spinner>c</Spinner>} Send
        </Button>
        {error.hasError && <Error><B>Error:</B> {error.error}</Error>}
        {success && <Feedback>Your message has been sent! Thank you.</Feedback>}
      </form>
    );
  }
}

export default Form;
