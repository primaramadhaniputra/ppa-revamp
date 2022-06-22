import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const LoginSlider = styled.div`
  height: 400px;
  width: 100%;
  position: relative;
  overflow: hidden;

  ${mediaQueries.lg} {
    height: calc(100vh - 108px);
    width: 100%;
  }
`;
