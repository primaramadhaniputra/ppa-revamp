import { fontFamilies, Grid } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, fontWeights } from "utils/styles";

export const RadioWrapper = styled(Grid)`
	font-size: ${fontSizing.xs.fontSize};
	font-family: ${fontFamilies.poppins};
	font-weight: ${fontWeights.bold};
	color: ${colors.darkGrey};
`;
