import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, fontWeights } from "utils/styles";

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const StyledText = styled.p`
  font-family: ${fontFamilies.poppins};
  font-size: ${fontSizing.sm.fontSize};
  cursor: pointer;
  padding: 5px 0;
  border-bottom: 2px solid white;
  color: rgba(0, 0, 0, 0.3);
  &.active {
    font-weight: ${fontWeights.bold};
    border-bottom: 2px solid ${colors.orange};
    color: black;
  }
`;
