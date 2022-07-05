import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights } from "utils/styles";

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

export const TabText = styled.p`
  font-family: ${fontFamilies.poppins};
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizing.sm.fontSize};
  line-height: ${fontSizing.md.lineHeight};
  cursor: pointer;
`;
