import { Grid } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Wrapper = styled.div`
  display: none;
  ${mediaQueries.lg} {
    display: flex;
    align-items: center;
    gap: 25px;
    flex: 1;
    justify-content: space-between;
    margin-left: 20px;
  }
`;

export const Container = styled(Grid)`
  ${mediaQueries.md} {
    gap: 15px;
  }

  ${mediaQueries.xl} {
    gap: 32px;
  }
`;
