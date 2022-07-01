import { ISelectItem } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import { useState } from "react";
import Footer from "src/components/organism/Footer";
import Navbar from "src/components/organism/Navbar";
import { fontSizing } from "utils/styles";
import LayoutChanger from "./LayoutChanger";
import { ContentWrapper, Wrapper } from "./styles";

interface IProps {
  children: React.ReactNode;
  title: string;
}

export default function Layout({ title, children }: IProps) {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [navbarPosition, setNavbarPosition] = useState<
    "start" | "center" | "end"
  >("start");

  const handleChangeHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  const handleLayoutChange = (e: ISelectItem | ISelectItem[] | null) => {
    return setNavbarPosition(e?.values);
  };
  return (
    <Wrapper>
      <Navbar
        handleChangeHamburgerMenu={handleChangeHamburgerMenu}
        showHamburgerMenu={showHamburgerMenu}
        position={navbarPosition}
      />
      <ContentWrapper>
        <LayoutChanger handleLayoutChange={handleLayoutChange} />
        <TitlePage type="h3" styles={{ fontSize: fontSizing["3xl"].fontSize }}>
          {title}
        </TitlePage>
        {children}
        {/* <Banner /> */}
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
}
