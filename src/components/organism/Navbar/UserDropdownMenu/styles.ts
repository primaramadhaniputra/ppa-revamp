import { Card } from "@hudoro/neron";
import styled from "styled-components";
import { colors } from "utils/styles";

export const Wrapper = styled.div`
  position: absolute;
  top: 70px;
  min-width: 100px;
  right: 25px;
`;

export const StyeldCard = styled(Card)`
  background-color: black;
  background-color: ${colors.primary};
  color: ${colors.white};
`;
