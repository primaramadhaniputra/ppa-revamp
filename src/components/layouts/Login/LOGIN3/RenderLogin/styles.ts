import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const WrapperImageInput = styled.div`
  ${mediaQueries.lg} {
    /* height: 100vh; */
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const FooterContainer = styled.div`
  ${mediaQueries.lg} {
    display: none;
  }
`;

export const Wrapper = styled.div``;
