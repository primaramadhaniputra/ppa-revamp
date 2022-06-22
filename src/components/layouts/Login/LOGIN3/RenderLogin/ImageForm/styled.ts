import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const LoginSlider = styled.div`
  height: 400px;
  width: 100%;
  position: relative;
  overflow: hidden;
  ${mediaQueries.lg} {
    height: 100vh;
    width: 100%;
  }
`;
