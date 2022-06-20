import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Wrapper = styled.div``;

export const WrapperImageInput = styled.div`
  ${mediaQueries.lg} {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "column-1 column-2 ";
  }
`;
