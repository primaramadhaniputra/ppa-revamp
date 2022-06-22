import { fontFamilies, Grid } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights } from "utils/styles";

export const Wrapper = styled(Grid)`
  margin: 50px 0 30px;
  text-align: center;
`;

export const WelcomeTextHeader = styled.p`
  font-family: ${fontFamilies.poppins};
  font-style: normal;
  font-weight: ${fontWeights.semi};
  font-size: ${fontSizing["2xl"].fontSize};
  line-height: ${fontSizing.xl.lineHeight};
`;
export const WelcomeText = styled.p`
  font-family: ${fontFamilies.poppins};
  font-style: normal;
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizing.sm.fontSize};
  line-height: ${fontSizing.xl.lineHeight};
`;
