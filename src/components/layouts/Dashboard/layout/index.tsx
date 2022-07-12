import TitlePage from "atoms/TitlePage";
import { useState } from "react";
import Footer from "src/components/organism/Footer";
import Navbar from "src/components/organism/Navbar";
import { fontSizing } from "utils/styles";
import { ContentWrapper, Wrapper } from "./styles";

interface IProps {
  children: React.ReactNode;
  title: string;
}

export default function Layout({ title, children }: IProps) {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const handleChangeHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  return (
    <Wrapper>
      <Navbar
        handleChangeHamburgerMenu={handleChangeHamburgerMenu}
        showHamburgerMenu={showHamburgerMenu}
        position="start"
      />
      <ContentWrapper>
        <TitlePage type="h3" styles={{ fontSize: fontSizing["3xl"].fontSize }}>
          {title}
        </TitlePage>
        {children}
      </ContentWrapper>
      <Footer type="dashboard" />
    </Wrapper>
  );
}
