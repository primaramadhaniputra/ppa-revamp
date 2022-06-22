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
export const SliderButton = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  bottom: 20px;
  justify-content: center;
  gap: 30px;
`;
