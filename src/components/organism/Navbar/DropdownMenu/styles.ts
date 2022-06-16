import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontWeights } from "utils/styles";

export const StyledTextDropdown = styled.p`
  font-family: ${fontFamilies.poppins};
  font-style: normal;
  font-weight: ${fontWeights.regular};
  font-size: 14px;
  line-height: 21px;
  color: ${colors.white};
`;
