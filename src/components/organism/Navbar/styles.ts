import { Grid } from "@hudoro/neron";
import styled from "styled-components";
import { colors, mediaQueries } from "utils/styles";

export const Wrapper = styled(Grid)`
  background-color: ${colors.primary};
  padding: 30px 15px;
  flex-direction: column;
  ${mediaQueries.lg} {
    justify-content: space-between;
    flex-direction: row;
    padding: 30px 100px;
    align-items: center;
  }
`;

export const LogoWrapper = styled(Grid)`
  margin-bottom: 40px;
  ${mediaQueries.lg} {
    margin-bottom: 0;
  }
`;

export const LinkWrapper = styled(Grid)`
  display: flex;
  gap: 25px;
  flex-direction: column;
  ${mediaQueries.lg} {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const StyledUserContainer = styled.div`
  display: block;
  ${mediaQueries.lg} {
    display: none;
  }
`;
export const StyledUserContainerDesktop = styled.div`
  display: none;
  ${mediaQueries.lg} {
    display: block;
  }
`;
