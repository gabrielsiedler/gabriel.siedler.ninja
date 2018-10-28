import Link from "next/link";
import { withRouter } from "next/router";
import PropTypes from "prop-types";

import { MenuContainer, MenuLink } from "./Menu.style";

const Menu = ({ router }) => {
  const activeRoute = router.route;

  return (
    <MenuContainer>
      <Link href="/home" as="/" passHref>
        <MenuLink isActive={activeRoute === "/home" || activeRoute === "/"}>
          About Me
        </MenuLink>
      </Link>
      <Link href="/clients" passHref>
        <MenuLink isActive={activeRoute === "/clients"}>Clients</MenuLink>
      </Link>
      <Link href="/contact" passHref>
        <MenuLink isActive={activeRoute === "/contact"}>Contact</MenuLink>
      </Link>
    </MenuContainer>
  );
};

Menu.propTypes = {
  router: PropTypes.object
};

export default withRouter(Menu);
