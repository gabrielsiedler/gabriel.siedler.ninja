import Link from 'next/link';

import { MenuContainer, MenuLink } from './Menu.style';

const Menu = () => (
  <MenuContainer>
    <Link href="/home" as="/">
      <MenuLink>About Me</MenuLink>
    </Link>
    <Link href="/agency-enterprise">
      <MenuLink>Agency Enterprise</MenuLink>
    </Link>
    <Link href="/toptal">
      <MenuLink>Toptal</MenuLink>
    </Link>
    <Link href="/clients">
      <MenuLink>Clients</MenuLink>
    </Link>
    <Link href="/contact">
      <MenuLink>Contact</MenuLink>
    </Link>
  </MenuContainer>
);

export default Menu;
