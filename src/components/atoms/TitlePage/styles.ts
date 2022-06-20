import { Text } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights, mediaQueries } from "utils/styles";

interface IPropsStyledTitle {
  sizing?: string;
}

export const StyledTitle = styled(Text)<IPropsStyledTitle>`
  font-weight: ${fontWeights.bold};
  ${mediaQueries.lg} {
    font-size: ${(props) => props.sizing};
  }
`;
