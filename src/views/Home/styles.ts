import styled from "styled-components";
import { colors, fontFamilies } from "@hudoro/neron";
import { fontSizing, fontWeights } from "utils/styles";

export const Wrapper = styled.section`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Container = styled.article`
  max-width: 1280px;
  margin: auto;
  p {
    font-family: ${fontFamilies.openSans};
    font-size: ${fontSizing.lg.fontSize};
    line-height: ${fontSizing.lg.lineHeight};
  }
  a {
    color: ${colors.primary[100]};
    font-weight: ${fontWeights.bold};
  }
  flex: 1;
`;

export const Title = styled.h1`
  font-family: ${fontFamilies.poppins};
  font-size: ${fontSizing["5xl"].fontSize};
  line-height: ${fontSizing["5xl"].lineHeight};
  font-weight: ${fontWeights.bold};
`;

export const ParagraphContainer = styled.article`
  margin-top: 2rem;
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 1.5rem 0;
  font-family: ${fontFamilies.poppins};
`;
