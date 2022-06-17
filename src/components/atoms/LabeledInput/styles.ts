import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights } from "utils/styles";

export const StyledLabel = styled.label`
  font-family: ${fontFamilies.poppins};
  font-style: normal;
  font-weight: ${fontWeights.regular};
  font-size: 14px;
  line-height: 21px;
  color: black;
`;

export const StyledInput = styled.input`
  outline: none;
  background: #e8f0fe;
  border: 1px solid rgba(37, 40, 43, 0.2);
  border-radius: 5px;
  height: 41px;
  padding: 0 10px;
  font-family: ${fontFamilies.poppins};
  &::placeholder {
    font-family: ${fontFamilies.poppins};
  }
`;
