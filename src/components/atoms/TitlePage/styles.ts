import { fontFamilies, Text } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights, mediaQueries } from "utils/styles";

interface IPropsStyledTitle {
  sizing?: string;
}

export const StyledTitle = styled(Text)<IPropsStyledTitle>`
  font-weight: ${fontWeights.semi};
  font-family: ${fontFamilies.poppins};
  font-family: ${fontFamilies.poppins};
  font-weight: "500";
  line-height: "18px";

  ${mediaQueries.lg} {
    font-size: ${(props) => props.sizing};
  }
`;
