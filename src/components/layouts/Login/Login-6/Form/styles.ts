import { fontFamilies, Grid, Text } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights, mediaQueries } from "utils/styles";

export const Wrapper = styled(Grid)`
  position: relative;
  background-color: white;
  ${mediaQueries.lg} {
    background-image: url(/images/mobilProyek.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100%;
    max-height: 1000px;
    display: flex;
    align-items: center;
    padding-left: 50px;
  }
  ${mediaQueries.lg} {
    &::after {
      content: "";
      background-color: black;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0.5;
    }
  }
`;

export const Wrapper2 = styled.div`
  position: relative;
  ${mediaQueries.lg} {
    background-color: white;
    height: 110%;
    min-width: 400px;
    z-index: 99;
  }
  ${mediaQueries.xl} {
    min-width: 500px;
    height: 120%;
  }
  ${mediaQueries["2xl"]} {
    margin-left: 50px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  ${mediaQueries.lg} {
    padding: 50px;
  }
`;

export const FooterContainer = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  ${mediaQueries.lg} {
    display: block;
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  display: none;
  ${mediaQueries.lg} {
    display: block;
    width: 100%;
    color: white;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Text1 = styled(Text)`
  font-family: ${fontFamilies.openSans};
  font-weight: ${fontWeights.extraBold};
  ${mediaQueries.lg} {
    font-size: 40px;
  }
  ${mediaQueries.xl} {
    font-size: 50px;
  }
`;
export const Text2 = styled(Text)`
  font-family: ${fontFamilies.openSans};
  letter-spacing: 1.2px;
  ${mediaQueries.lg} {
    letter-spacing: 2px;
    font-size: 13px;
  }
  ${mediaQueries.xl} {
    letter-spacing: 2px;
    font-size: 15px;
  }
`;
