import { Grid } from "@hudoro/neron";
import styled from "styled-components";
import { colors, mediaQueries } from "utils/styles";

export const Wrapper = styled(Grid)`
  background-color: ${colors.primary};
  padding: 30px 15px;
  flex-direction: column;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  ${mediaQueries.lg} {
    justify-content: space-between;
    flex-direction: row;
    padding: 30px 100px;
    align-items: center;
    gap: 20px;
  }
`;

export const LogoWrapper = styled(Grid)``;

export const LinkWrapper = styled(Grid)`
  display: flex;
  gap: 25px;
  flex-direction: column;
  margin-top: 40px;
  ${mediaQueries.lg} {
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 0;
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

export const WrapperIconHamburger = styled.div`
  position: absolute;
  bottom: -25px;
  background-color: red;
  border-bottom-right-radius: 100%;
  border-bottom-left-radius: 100%;
  padding: 5px;
  background-color: ${colors.primary};
  left: 50%;
  transform: translate(-50%, 0);
  ${mediaQueries.lg} {
    display: none;
  }
`;

interface IProps {
  variant: number;
}

export const WrapperDropdown = styled.div<IProps>`
  overflow-y: scroll;
  transition: 1s height ease;
  height: ${(props) => `${props.variant}px`};
  ${mediaQueries.lg} {
    overflow-y: hidden;
    height: auto !important;
    flex: 1;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 10px;
  }
`;
