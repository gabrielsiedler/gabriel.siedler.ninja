import { Label, Input, TextArea, Button } from './Form.style';
import { H3 } from '../Common';

const Intro = () => (
  <form>
    <H3>Let{'\''}s talk</H3>
    <Label htmlFor="subject">
      Subject
      <Input type="text" id="subject" />
    </Label>
    <Label htmlFor="email">
      Email
      <Input type="email" id="email" />
    </Label>
    <Label htmlFor="message">
      Message
      <TextArea id="message" rows="5" />
    </Label>
    <Button>Send</Button>
  </form>
);

export default Intro;
