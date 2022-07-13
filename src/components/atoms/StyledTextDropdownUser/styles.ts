import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, mediaQueries } from "utils/styles";

export const HoverWrapper = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;
  padding: 10px 10px 10px 0;
  ${mediaQueries.lg} {
    padding: 10px;
    &:hover {
      /* background-color: ${colors.darkGrey}; */
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

export const StyledUserName = styled.p`
  color: white;
  font-size: 14px;
  font-family: ${fontFamilies.poppins};
  display: none;
  ${mediaQueries.lg} {
    display: inline-block;
    margin-right: 3px;
  }
`;
