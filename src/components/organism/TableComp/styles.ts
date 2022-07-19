import { Card } from "@hudoro/neron";
import styled from "styled-components";
import { colors } from "utils/styles";

export const Wrapper = styled(Card)`
  margin: 50px 0;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.4);
  padding: 60px 20px;
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
