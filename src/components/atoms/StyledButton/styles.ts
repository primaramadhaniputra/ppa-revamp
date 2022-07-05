import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, fontWeights } from "utils/styles";

export const StyledButton = styled.button`
  background: ${colors.primary};
  border-radius: 5px;
  width: 100%;
  border: none;
  padding: 10px 0;
  font-family: ${fontFamilies.poppins};
  font-style: normal;
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizing.sm.fontSize};
  text-align: center;
  color: white;
`;
