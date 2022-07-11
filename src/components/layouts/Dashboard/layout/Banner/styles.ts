import { Card } from "@hudoro/neron";
import styled from "styled-components";
import { colors } from "utils/styles";

export const Wrapper = styled(Card)`
  /* box-shadow: 10px 10px 10px 10px black; */
  margin-top: 50px;
`;

export const ItemContainer = styled.div`
  display: flex;
  gap: 31px;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  /* ini styling */
  /* background-color: ${colors.blueSky}; */
  background-color: #f0f6fb;
  flex: 1;
  min-width: 300px;
  border-radius: 5px;
  padding: 15px;
`;
