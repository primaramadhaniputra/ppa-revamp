import { fontFamilies, Text, Grid, Card } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, mediaQueries } from "utils/styles";

export const Wrapper = styled(Grid)`
  flex-direction: column;
  gap: 5px;
  justify-content: center;
`;
export const WrapperDropdown = styled(Grid)`
  flex-direction: column;
  border-radius: 5px;
`;

export const StyledCardDropdown = styled(Card)`
  display: flex;
  flex-direction: column;
  background-color: black;
  gap: 10px;
  color: ${colors.white};
  ${mediaQueries.lg} {
    position: absolute;
    top: 70px;
    min-width: 200px;
    background-color: ${colors.primary};
  }
`;

export const StyledText = styled(Text)`
  font-size: ${fontSizing.sm};
  color: ${colors.white};
  font-family: ${fontFamilies.poppins};
`;
