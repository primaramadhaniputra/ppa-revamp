import styled from "styled-components";
import { colors, mediaQueries } from "utils/styles";

export const NavbarWrapper = styled.div`
  /* padding: 25px 32px; */
  padding: 8.5px 32px;
  /* height: 55px; */
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: ${colors.primary};
  ${mediaQueries.lg} {
    position: static !important;
    /* padding: 25px 100px; */
    padding: 8.5px 100px;
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
