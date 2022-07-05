import React from "react";
import { Link } from "utils/dummy";
import DesktopMenu from "./DesktopMenu";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import { LinkWrapper, NavbarWrapper } from "./styles";

interface IProps {
  handleChangeHamburgerMenu: () => void;
  showHamburgerMenu: boolean;
  position: "start" | "center" | "end";
}

export default function Navbar({
  handleChangeHamburgerMenu,
  showHamburgerMenu,
  position,
}: IProps) {
  const renderHambrgerMenu = () => {
    return (
      <LinkWrapper>
        {Link.map((item) => (
          <HamburgerMenu item={item} />
        ))}
      </LinkWrapper>
    );
  };

  return (
    <NavbarWrapper>
      <Logo handleChangeHamburgerMenu={handleChangeHamburgerMenu} />
      {showHamburgerMenu && renderHambrgerMenu()}
      <DesktopMenu position={position} />
    </NavbarWrapper>
  );
}
