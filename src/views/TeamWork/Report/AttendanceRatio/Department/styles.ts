import { fontFamilies, Text } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, fontWeights, mediaQueries } from "utils/styles";

export const TabsContainer = styled.div`
  background-color: ${colors.orangeGrey};
  color: ${colors.orange};
  display: flex;
  border-radius: 5px;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: 10px;
  ${mediaQueries.sm} {
    margin-top: 0;
    width: auto;
  }
`;

export const StyledText = styled.p`
  font-family: ${fontFamilies.poppins};
  font-size: ${fontSizing.sm.fontSize};
  cursor: pointer;
  padding: 3px 40px;
  border-radius: 5px;
  width: 100%;
  text-align: center;
  &.active {
    background-color: ${colors.orange};
    font-weight: ${fontWeights.bold};
    color: white;
  }
`;

export const DepartmentText = styled(Text).attrs({
  variant: "h4",
})`
  font-size: 15px;
  font-weight: ${fontWeights.bold};
  ${mediaQueries.md} {
    font-size: 18px;
  }
`;
