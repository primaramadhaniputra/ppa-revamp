import TitlePage from "atoms/TitlePage";
import React from "react";
import Navbar from "src/components/organism/Navbar";
import { ContentWrapper, Wrapper } from "./styles";
import HomeInput from "./HomeInput";
import Banner from "./Banner";
import Footer from "./Footer";
import { dummyInputDropdown } from "utils/dummy";


export default function Home() {
  return (
    <Wrapper>
      <Navbar />
      <ContentWrapper>
        <TitlePage type="h3"> Operation / Report </TitlePage>
        <HomeInput items={dummyInputDropdown} />
        <Banner />
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
}
