import React from "react";
import {
  Container,
  Footer,
  ParagraphContainer,
  Title,
  Wrapper,
} from "./styles";

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Title>Welcome to Next JS boilerplate</Title>
        <ParagraphContainer>
          <p>
            This boilerplate uses{" "}
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              Next JS
            </a>{" "}
            as its framework and{" "}
            <a
              href="https://styled-components.com/"
              target="_blank"
              rel="noreferrer"
            >
              Styled Components
            </a>{" "}
            for the styling. Check our{" "}
            <a
              href="https://github.com/hudoro-solusi-digital"
              target="_blank"
              rel="noreferrer"
            >
              Github Page
            </a>{" "}
            for more open source project like this.
          </p>
          <br />
          <p>Go to views directory to start editing this page</p>
        </ParagraphContainer>
      </Container>
      <Footer>
        PT. Hudoro Solusi Digital © 2021 - 2022. All Rights Reserved
      </Footer>
    </Wrapper>
  );
}
