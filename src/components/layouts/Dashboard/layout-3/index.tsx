import TitlePage from "atoms/TitlePage";
import { useState } from "react";
import Footer from "src/components/organism/Footer";
import HomeInput from "src/components/organism/HomeInput";
import { dummyInputDropdown } from "utils/dummy";
import Navbar from "src/components/organism/Navbar";
import Banner from "./Banner";
import { ContentWrapper, Wrapper } from "./styles";

export default function Layout3() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const handleChangeHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  return (
    <Wrapper>
      <Navbar
        handleChangeHamburgerMenu={handleChangeHamburgerMenu}
        showHamburgerMenu={showHamburgerMenu}
        type="layout3"
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
