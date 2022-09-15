import { Card, Grid } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Wrapper = styled(Grid).attrs({
  container: true,
  gap: 3,
  justifyContent: "center",
})`
  & > :nth-child(1) {
    background-color: #4a7abc;
  }
  & > :nth-child(2) {
    background-color: #25b78a;
  }
  & > :nth-child(3) {
    background-color: #f05d5d;
  }
`;

export const IconContainer = styled(Grid).attrs({
  container: true,
  justifyContent: "center",
  alignItems: "center",
})`
  border-radius: 2px;
  flex: 1;
  padding: 3px 0;
`;

export const Container = styled(Card)`
  margin-top: 30px;
  padding: 0;
  box-shadow: none;
  border-radius: 3px;
  background-color: transparent;
  ${mediaQueries.sm} {
    background-color: white;
    padding: 20px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
  }
`;

export const THContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
