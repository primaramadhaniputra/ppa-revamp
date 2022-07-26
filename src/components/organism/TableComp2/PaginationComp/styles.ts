import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const StyledText = styled.p`
  font-size: 12px;
  font-family: ${fontFamilies.poppins};
  ${mediaQueries.md} {
    font-size: 15px;
  }
`;
