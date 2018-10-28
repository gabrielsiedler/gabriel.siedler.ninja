import Link from 'next/link'
import { MenuContainer, MenuLink } from './Menu.style'

interface MenuInterface {
  currentPage: 'home' | 'clients' | 'contact'
}

export const Menu = ({ currentPage }: MenuInterface) => (
  <MenuContainer>
    <Link href="/home" as="/" passHref>
      <MenuLink isActive={currentPage === 'home'}>About Me</MenuLink>
    </Link>
    <Link href="/clients" passHref>
      <MenuLink isActive={currentPage === 'clients'}>Clients</MenuLink>
    </Link>
    <Link href="/contact" passHref>
      <MenuLink isActive={currentPage === 'contact'}>Contact</MenuLink>
    </Link>
  </MenuContainer>
)
