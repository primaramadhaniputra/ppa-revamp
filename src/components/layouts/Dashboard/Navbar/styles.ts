import styled from "styled-components";
import { colors, mediaQueries } from "utils/styles";

export const NavbarWrapper = styled.div`
  padding: 25px 32px;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: ${colors.primary};
  ${mediaQueries.lg} {
    position: static;
    padding: 25px 100px;
    margin-top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
