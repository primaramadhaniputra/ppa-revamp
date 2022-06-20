import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Wrapper = styled.div``;

export const WrapperImageInput = styled.div`
  ${mediaQueries.lg} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const FooterContainer = styled.div`
  ${mediaQueries.lg} {
    display: none;
  }
`;
