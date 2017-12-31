import Link from 'next/link';

import { MenuContainer, MenuLink } from './Menu.style';

const Menu = () => (
  <MenuContainer>
    <Link href="/home" as="/" passHref>
      <MenuLink>About Me</MenuLink>
    </Link>
    <Link href="/work" passHref>
      <MenuLink>Work</MenuLink>
    </Link>
    <Link href="/clients" passHref>
      <MenuLink>Clients</MenuLink>
    </Link>
    <Link href="/contact" passHref>
      <MenuLink>Contact</MenuLink>
    </Link>
  </MenuContainer>
);

export default Menu;
