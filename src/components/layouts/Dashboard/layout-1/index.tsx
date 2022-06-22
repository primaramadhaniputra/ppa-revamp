import TitlePage from "atoms/TitlePage";
import { useState } from "react";
import Footer from "src/components/organism/Footer";
import HomeInput from "src/components/organism/HomeInput";
import Navbar from "src/components/organism/Navbar";
import { dummyInputDropdown } from "utils/dummy";
import { fontSizing } from "utils/styles";
import Banner from "./Banner";
import { ContentWrapper, Wrapper } from "./styles";

export default function Layout1() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const handleChangeHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  return (
    <Wrapper>
      <Navbar
        handleChangeHamburgerMenu={handleChangeHamburgerMenu}
        showHamburgerMenu={showHamburgerMenu}
        type="layout1"
      />
      <ContentWrapper>
        <TitlePage type="h3" styles={{ fontSize: fontSizing["3xl"].fontSize }}>
          Operation / Report
        </TitlePage>
        <HomeInput
          items={dummyInputDropdown}
          title="Menu"
          placeholder="Device / Production / Payload"
        />
        <Banner />
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
}
