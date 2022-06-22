import { fontFamilies, Grid, Text } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing, mediaQueries } from "utils/styles";

export const Wrapper = styled(Grid)`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${mediaQueries.lg} {
    flex-direction: row;
    align-items: flex-end;
  }
`;
export const WrapperInput = styled(Grid)`
  margin-top: 5px;
  position: relative;
  ${mediaQueries.lg} {
    max-width: 250px;
  }
`;

export const InputLabel = styled(Text)`
  line-height: ${fontSizing.md.lineHeight};
  font-family: ${fontFamilies.openSans};
`;
