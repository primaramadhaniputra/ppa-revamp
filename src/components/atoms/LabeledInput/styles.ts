import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, fontWeights } from "utils/styles";

export const StyledLabel = styled.label`
  font-family: ${fontFamilies.poppins};
  font-style: normal;
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizing.sm.fontSize};
  color: black;
`;

export const StyledInput = styled.input`
  outline: none;
  border: 1px solid ${colors.borderBlue};
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 12px;
  font-family: ${fontFamilies.poppins};
  &::placeholder {
    font-family: ${fontFamilies.poppins};
  }
  &:focus {
    background: ${colors.blueSky};
    outline: 1px solid ${colors.primary};
  }
`;
