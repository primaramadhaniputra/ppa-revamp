import { fontFamilies, Grid } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, fontWeights } from "utils/styles";

export const RadioWrapper1 = styled(Grid)`
  font-size: ${fontSizing.xs.fontSize};
  font-family: ${fontFamilies.poppins};
  color: ${colors.blue};
`;
export const RadioWrapper2 = styled(Grid)`
  font-size: ${fontSizing.xs.fontSize};
  font-family: ${fontFamilies.poppins};
  /* color: ${colors.blue}; */
  /* new changes */
  font-weight: ${fontWeights.bold};
  color: #454646;
`;
