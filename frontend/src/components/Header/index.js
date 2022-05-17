import React from "react";
import { Container, Navigation } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/meditrakv4.svg";
const Header = () => {
  return (
    <Container>
      <Navigation>
        <img src={Logo} />
        <a>
          <FontAwesomeIcon icon={faBars} />
        </a>
      </Navigation>
    </Container>
  );
};
export default Header;
