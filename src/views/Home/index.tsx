import TitlePage from "atoms/TitlePage";
import React from "react";
import Navbar from "src/components/organism/Navbar";
import { ContentWrapper, Wrapper } from "./styles";
import HomeInput from "./HomeInput";
import Banner from "./Banner";
import Footer from "./Footer";

const items = [{
  id: 0,
  value: "0de1dee1-af35-4c0b-9aaf-041c5e9da5c5",
  label: "Front-End",
}]

export default function Home() {
  return (
    <Wrapper>
      <Navbar />
      <ContentWrapper>
        <TitlePage type="h3"> Operation / Report </TitlePage>
        <HomeInput items={items} />
        <Banner />
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
}
