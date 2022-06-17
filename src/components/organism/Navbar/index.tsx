import TitlePage from "atoms/TitlePage";
import { useState } from "react";
import { dummyInputDropdown, Link } from "utils/dummy";
import Banner from "./Banner";
import DesktopMenu from "./DesktopMenu";
import Footer from "./Footer";
import HamburgerMenu from "./HamburgerMenu";
import HomeInput from "./HomeInput";
import Logo from "./Logo";
import { ContentWrapper, LinkWrapper, NavbarWrapper, Wrapper } from "./styles";

export default function Navbar() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const handleChangeHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

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
    <Wrapper>
      <NavbarWrapper>
        <Logo handleChangeHamburgerMenu={handleChangeHamburgerMenu} />
        {showHamburgerMenu && renderHambrgerMenu()}
        <DesktopMenu />
      </NavbarWrapper>
      <ContentWrapper>
        <TitlePage type="h3"> Operation / Report </TitlePage>
        <HomeInput
          items={dummyInputDropdown}
          title="Menu"
          placeholder="Device / Production"
        />
        <Banner />
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
}
