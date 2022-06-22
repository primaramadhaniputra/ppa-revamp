import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors } from "utils/styles";

export const StyledButton = styled.button`
  background: ${colors.primary};
  border-radius: 5px;
  width: 100%;
  border: none;
  padding: 10px 0;
  font-family: ${fontFamilies.poppins};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: white;
`;
