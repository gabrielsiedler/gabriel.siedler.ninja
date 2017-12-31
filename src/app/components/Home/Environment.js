import { EnvironmentContainer, Item, Logo, Description, B } from './Environment.style';

import items from '../../data/environment.json';

const itemsWithKeys = items.map((item, i) => ({
  ...item,
  id: i,
}));

const Environment = () => (
  <EnvironmentContainer>
    {itemsWithKeys.map(item => (
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
);

export default Environment;
