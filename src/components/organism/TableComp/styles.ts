import styled from "styled-components";
import { colors } from "utils/styles";

export const Wrapper = styled.div`
  margin-top: "50px";
`;

export const PaginationContainer = styled.div`
  & > div {
    padding: 0 !important;
  }
  /* & .active {
        background-color: ${colors.orange};
        color: ${colors.white};
        border-color: ${colors.orange};
    } */
`;
