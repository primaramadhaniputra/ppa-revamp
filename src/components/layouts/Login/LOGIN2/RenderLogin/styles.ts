import styled from "styled-components";
import { mediaQueries } from "utils/styles";

interface IWrapper {
  nameLogin?: string;
}

export const WrapperImageInput = styled.div<IWrapper>`
  ${mediaQueries.lg} {
    display: grid;
    grid-template-columns: ${(props) =>
      props.nameLogin === "secondLogin" ? "1fr 2fr" : "2fr 1fr"};
    grid-template-areas: "column-1 column-2 ";
  }
`;
