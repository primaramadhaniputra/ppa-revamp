import { Grid } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const LogoWrapper = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HamburgerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  ${mediaQueries.lg} {
    display: none;
  }
`;
