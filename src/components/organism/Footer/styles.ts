import { fontFamilies, Text } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights, mediaQueries } from "utils/styles";

export const Wrapper = styled.div`
  /* margin-top: 50px; */
  padding: 10px 0;
  /* border-top: 1px solid #9b9ea2; */
  box-shadow: 0 -2px 3px 0 rgba(0, 0, 0, 0.5);
`;

export const FooterText = styled(Text)`
  font-family: ${fontFamilies.poppins};
  font-weight: ${fontWeights.medium};
  font-size: ${fontSizing.sm.fontSize};
  ${mediaQueries.lg} {
    font-size: ${fontSizing.md.fontSize};
  }
`;
