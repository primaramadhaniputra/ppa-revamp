import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, fontWeights } from "utils/styles";

export const Wrapper = styled.div`
  min-height: 60vh;
  width: 100%;
  flex: 3;
`;

export const SelectLabel = styled.p`
  font-family: ${fontFamilies.openSans};
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizing.sm.fontSize};
  line-height: ${fontSizing.sm.lineHeight};
  color: rgba(37, 40, 43, 0.8);
`;
