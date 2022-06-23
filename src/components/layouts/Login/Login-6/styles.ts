import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Wrapper = styled.div`
  ${mediaQueries.lg} {
    background: url(/images/bg.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }
`;

export const WrapperImageInput = styled.div`
  ${mediaQueries.lg} {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 100px;
  }
  ${mediaQueries.xl} {
    padding: 100px 150px;
  }
`;

export const FooterContainer = styled.div`
  ${mediaQueries.lg} {
    display: none;
  }
`;
