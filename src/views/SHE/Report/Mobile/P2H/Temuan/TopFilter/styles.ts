import { fontFamilies, Grid } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights, mediaQueries } from "utils/styles";

export const Wrapper = styled(Grid).attrs({
  container: true,
})`
  margin-bottom: 30px;
  column-gap: 30px;
  row-gap: 10px;
  width: 100%;
  align-items: center;
  ${mediaQueries.lg} {
    width: 100%;
  }
  ${mediaQueries.xl} {
    width: 90%;
  }
  ${mediaQueries["2xl"]} {
    width: 80%;
  }
`;

export const TextYear = styled.p`
  font-family: ${fontFamilies.poppins};
  font-size: ${fontSizing.lg.fontSize};
  color: rgba(0, 0, 0, 0.5);
  & span {
    font-weight: ${fontWeights.bold};
    font-size: ${fontSizing["4xl"].fontSize};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  ${mediaQueries.xl} {
    width: auto;
  }
`;
