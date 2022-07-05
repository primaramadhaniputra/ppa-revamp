import styled from "styled-components";
import { mediaQueries } from "utils/styles";

// interface ILoginImage {
//     urlImage: string;
// }

// export const LoginImage = styled.div<ILoginImage>`
//   height: 400px;
//   width: 100%;
//   background-image: ${(props) => `url(${props.urlImage})`};
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   ${mediaQueries.lg} {
//     height: calc(100vh - 108px);
//     width: 100%;
//   }
// `;
export const LoginSlider = styled.div`
  height: 400px;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: none;
  ${mediaQueries.lg} {
    height: 745px;
    width: 100%;
    flex: 1;
    border-radius: 5px;
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
