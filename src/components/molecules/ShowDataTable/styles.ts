import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights, mediaQueries } from "utils/styles";

export const NumberInput = styled.input.attrs({
  type: "number",
})`
  width: 100%;
  padding: 4px 6px;
  outline: none;
  font-family: ${fontFamilies.poppins};
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  font-weight: ${fontWeights.regular};
  ${mediaQueries.md} {
    max-width: 45px;
  }
`;
