import { ISelectItem } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import { useState } from "react";
import Footer from "src/components/organism/Footer";
import HomeInput from "src/components/organism/HomeInput";
import Navbar from "src/components/organism/Navbar";
import { IOperationReportPayloadData } from "utils/interfaces";
import { fontSizing } from "utils/styles";
import DisplayData from "./DisplayData";
// import Banner from "./Banner";
import LayoutChanger from "./LayoutChanger";
import { ContentWrapper, Wrapper } from "./styles";

export default function Layout() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [navbarPosition, setNavbarPosition] = useState<
    "start" | "center" | "end"
  >("start");
  const [dataChart, setDataChart] = useState<IOperationReportPayloadData>();
  const [isLoading, setIsLoading] = useState(true);

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
          Operation / Report
        </TitlePage>
        <HomeInput
          title="Menu"
          placeholder="Device / Production / Payload"
          setDataChart={setDataChart}
          setIsLoading={setIsLoading}
        />
        {/* <Banner /> */}
        <DisplayData data={dataChart} isLoading={isLoading} />
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
}
