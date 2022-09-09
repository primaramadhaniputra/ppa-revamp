import styled from "styled-components";
import { colors, mediaQueries } from "utils/styles";

export const NavbarWrapper = styled.div`
  padding: 8.5px 32px;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: ${colors.primary};
  ${mediaQueries.xl} {
    padding: 8.5px 100px;
  }
  ${mediaQueries.lg} {
    position: static !important;
    margin-top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LinkWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  ${mediaQueries.lg} {
    display: none;
  }
`;
