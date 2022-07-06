import styled from "styled-components";
import { colors } from "utils/styles";

export const Wrapper = styled.div``;

export const ItemContainer = styled.div`
  display: flex;
  gap: 31px;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  /* ini styling */
  background-color: ${colors.blueSky};
  flex: 1;
  min-width: 300px;
  border-radius: 5px;
  padding: 15px;
`;
