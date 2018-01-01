import { ListContainer, Item, Logo } from './List.style';
import { H3 } from './Content.style';

import items from '../../data/clients.json';

const itemsWithKeys = items.map((item, i) => ({
  ...item,
  id: i,
}));

const List = () => (
  <div>
    <H3>Clients</H3>
    <ListContainer>
      {itemsWithKeys.map(item => (
        <Item key={item.id} title={item.name} href={item.link} target="_blank">
          <Logo>
            <img alt={item.name} src={item.image} />
          </Logo>
        </Item>
      ))}
    </ListContainer>
  </div>
);

export default List;
