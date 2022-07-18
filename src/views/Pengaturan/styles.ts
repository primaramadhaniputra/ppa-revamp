import { Grid } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";
export const TabWrapper = styled.div`
  margin-top: 30px;
  flex: 1;
  max-width: 100%;
  ${mediaQueries.md} {
    max-width: 250px;
  }
`;

export const Container = styled(Grid).attrs({})`
  ${mediaQueries.md} {
    display: flex;
    gap: 30px;
  }
`;
