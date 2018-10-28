import items from '../../../data/environment.json'
import { H3, P } from '../../Common'
import { B, Description, EnvironmentContainer, Item, Logo } from './Environment.style'

const itemsWithKeys = items.map((item, i) => ({
  ...item,
  id: i,
}))

export const Environment = () => (
  <div>
    <H3>Environment</H3>
    <P>My comfy place - or development eco-system - can be resumed by the fancy images below:</P>
    <EnvironmentContainer>
      {itemsWithKeys.map((item) => (
        <Item key={item.id}>
          <Logo>
            <img alt={item.image.alt} src={item.image.src} />
          </Logo>
          <Description>
            <B>{item.description.name}</B> {item.description.text}
          </Description>
        </Item>
      ))}
    </EnvironmentContainer>
  </div>
)
