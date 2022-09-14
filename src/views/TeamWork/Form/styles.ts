import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";

export const TabsContainer = styled.div`
  margin: 15px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  row-gap: 5px;
`;

export const TabsText = styled.p`
  font-family: ${fontFamilies.poppins};
  font-size: 13.5px;
  cursor: pointer;
  padding: 10px;
  border-radius: 3px;
  color: black;
`;
