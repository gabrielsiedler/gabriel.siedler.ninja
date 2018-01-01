import { Component } from 'react';

import { Label, Input, TextArea, Button, Counter } from './Form.style';
import { H3 } from '../Common';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {},
    };

    this.onChange = this.onChange.bind(this);
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

  render() {
    const { form } = this.state;
    const { subject = '', email = '', message = '' } = form;

    return (
      <form>
        <H3>Let{"'"}s talk</H3>
        <Label htmlFor="subject">
          Subject
          <Input
            type="text"
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
            onChange={e => this.onChange(e.target.id, e.target.value, 500)}
            rows="5"
          />
          <Counter>{message.length}/500</Counter>
        </Label>
        <Button>Send</Button>
      </form>
    );
  }
}

export default Form;
