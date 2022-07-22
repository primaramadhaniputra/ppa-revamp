import { Card, Text } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontWeights } from "utils/styles";

export const Wrapper = styled(Card)`
  margin: 20px 0;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  padding: 30px 20px;
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

export const TableTitle = styled(Text).attrs({
  variant: "h4",
})`
  font-weight: ${fontWeights.semi};
  text-align: center;
  margin-bottom: 20px;
`;
