import styled from "styled-components";
import { colors, mediaQueries } from "utils/styles";

interface IWrapperImageInput {
  type?: string;
}

export const Wrapper = styled.div<IWrapperImageInput>`
  ${mediaQueries.lg} {
    background-color: ${(props) =>
      props.type === "login4" || props.type === "login41"
        ? colors.primary
        : colors.orange};
    height: 100vh;
  }
`;

export const WrapperImageInput = styled.div<IWrapperImageInput>`
  ${mediaQueries.lg} {
    display: flex;
    padding: 100px;
    padding-right: ${(props) => (props.type ? "345px" : "100px")};
    padding-left: ${(props) => (props.type ? "100px" : "345px")};
    height: 100%;
    align-items: center;
  }
`;

export const FooterContainer = styled.div`
  ${mediaQueries.lg} {
    display: none;
  }
`;
