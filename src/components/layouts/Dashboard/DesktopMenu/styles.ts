import { fontFamilies, Text } from "@hudoro/neron";
import styled from "styled-components";
import { colors, mediaQueries } from "utils/styles";

export const Wrapper = styled.div`
  display: none;
  ${mediaQueries.lg} {
    display: flex;
    align-items: center;
    gap: 25px;
  }
`;

export const StyledDesktopMenu = styled(Text)`
  font-family: ${fontFamilies.poppins};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: ${colors.white};
`;
