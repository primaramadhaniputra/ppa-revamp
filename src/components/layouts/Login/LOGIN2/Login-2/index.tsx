import React from "react";
import Footer from "src/components/organism/Footer";
import { Wrapper } from "./styles";
import RenderLogin from "../RenderLogin";

export default function Login2() {
  return (
    <Wrapper>
      <RenderLogin />
      <Footer />
    </Wrapper>
  );
}
