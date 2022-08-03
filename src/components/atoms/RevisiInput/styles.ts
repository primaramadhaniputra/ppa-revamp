import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const StyledInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 1.4px solid rgba(0, 0, 0, 0.1);
  padding: 5px 3px 0;
  font-size: 12px;
  width: 100%;
  font-family: ${fontFamilies.poppins};
  &::placeholder {
    font-family: ${fontFamilies.poppins};
    font-size: 13px;
  }
  ${mediaQueries.md} {
    font-size: 14px;
  }
`;
