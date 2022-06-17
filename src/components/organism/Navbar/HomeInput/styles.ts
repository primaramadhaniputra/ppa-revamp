import { fontFamilies, Grid, Text } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Wrapper = styled(Grid)`
  margin-top: 30px;
`;
export const WrapperInput = styled(Grid)`
  ${mediaQueries.md} {
    max-width: 250px;
  }
`;

export const InputLabel = styled(Text)`
  margin-bottom: 5px;
  font-family: ${fontFamilies.openSans};
`;
