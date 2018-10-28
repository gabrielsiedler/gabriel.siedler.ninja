import Link from 'next/link'
import { MenuContainer, MenuLink } from './Menu.style'

const getCurrentPathName = () => {
  if (!(global as any).window) return

  return window.location.pathname
}

export const Menu = () => {
  const currentPathName = getCurrentPathName()

  return (
    <MenuContainer>
      <Link href="/home" as="/" passHref>
        <MenuLink isActive={currentPathName === '/home' || currentPathName === '/'}>About Me</MenuLink>
      </Link>
      <Link href="/clients" passHref>
        <MenuLink isActive={currentPathName === '/clients'}>Clients</MenuLink>
      </Link>
      <Link href="/contact" passHref>
        <MenuLink isActive={currentPathName === '/contact'}>Contact</MenuLink>
      </Link>
    </MenuContainer>
  )
}
