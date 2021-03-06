import TitlePage from "atoms/TitlePage";
import { useEffect, useState } from "react";
import { currentLoginPages } from "services/pages";
import Footer from "src/components/organism/Footer";
import Navbar from "src/components/organism/Navbar";
import { notify } from "utils/functions";
import { fontSizing } from "utils/styles";
import { ContentWrapper, Wrapper } from "./styles";

interface IProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ title, children }: IProps) {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [navbarPosition, setNavbarPosition] = useState<
    "start" | "center" | "end"
  >("start");
  const handleChangeHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };
  useEffect(() => {
    currentLoginPages({
      path: "pages",
      params: {
        name: "NAVBAR",
      },
    })
      .then((res) => {
        if (res.data.data.pageId === 1) {
          setNavbarPosition("start");
        } else if (res.data.data.pageId === 2) {
          setNavbarPosition("center");
        } else {
          setNavbarPosition("end");
        }
      })
      .catch((err) => notify(err.message, "error"));
  }, []);
  return (
    <Wrapper>
      <Navbar
        handleChangeHamburgerMenu={handleChangeHamburgerMenu}
        showHamburgerMenu={showHamburgerMenu}
        position={navbarPosition}
      />
      <ContentWrapper>
        {title && (
          <TitlePage
            type="h3"
            styles={{ fontSize: fontSizing["3xl"].fontSize }}
          >
            {title}
          </TitlePage>
        )}
        {children}
      </ContentWrapper>
      <Footer type="dashboard" />
    </Wrapper>
  );
}
