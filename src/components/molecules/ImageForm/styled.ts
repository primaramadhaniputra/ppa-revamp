import styled from "styled-components";
import { mediaQueries } from "utils/styles";

interface ILoginSlider {
  height?: string;
}

export const LoginSlider = styled.div<ILoginSlider>`
  height: 400px;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: none;
  ${mediaQueries.lg} {
    height: ${(props) => (props.height ? props.height : "calc(100vh - 74px)")};
    width: 100%;
    display: block;
    border-radius: 5px;
  }
`;
