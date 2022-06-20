import TitlePage from "atoms/TitlePage";
import { useState } from "react";
import { dummyInputDropdown } from "utils/dummy";
import Banner from "./Banner";
import Footer from "./Footer";
import HomeInput from "./HomeInput";
import Navbar from "./Navbar";
import { ContentWrapper, Wrapper } from "./styles";

export default function Layout2() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const handleChangeHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  return (
    <Wrapper>
      <Navbar
        handleChangeHamburgerMenu={handleChangeHamburgerMenu}
        showHamburgerMenu={showHamburgerMenu}
      />
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
