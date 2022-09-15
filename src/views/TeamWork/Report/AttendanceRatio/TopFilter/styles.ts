import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights } from "utils/styles";

export const Wrapper = styled.div`
  margin: 10px 0;
  margin-bottom: 20px;
  column-gap: 30px;
  row-gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minMax(220px, 1fr));
`;

export const TextYear = styled.p`
  font-family: ${fontFamilies.poppins};
  font-size: ${fontSizing.sm.fontSize};
  color: rgba(0, 0, 0, 0.5);
  & span {
    font-weight: ${fontWeights.bold};
    font-size: 22px;
  }
`;

export const ButtonWrapper = styled.div``;
