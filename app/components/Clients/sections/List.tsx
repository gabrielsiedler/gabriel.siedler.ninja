import items from '../../../data/clients.json'
import { H3 } from '../../Common'
import { Item, ListContainer } from './List.style'

const itemsWithKeys = items.map((item, i) => ({
  ...item,
  id: i,
}))

export const List = () => (
  <div>
    <H3>Clients</H3>
    <ListContainer>
      {itemsWithKeys.map((item) => (
        <Item key={item.id} title={item.name} href={item.link} target="_blank">
          <img alt={item.name} src={item.image} />
        </Item>
      ))}
    </ListContainer>
  </div>
)
