import styled from "styled-components";
import { colors, mediaQueries } from "utils/styles";

// interface ILoginImage {
//     urlImage: string;
// }
interface ILoginImageSlider {
  url: string;
}

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

  ${mediaQueries.lg} {
    height: calc(100vh - 108px);
    width: 100%;
  }
`;

export const SliderImage = styled.div<ILoginImageSlider>`
  background-image: ${(props) => `url(${props.url})`};
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: 1s;
  &.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  &.lastSlide {
    transform: translateX(-100%);
  }
  &.nextSlide {
    transform: translateX(100%);
  }
`;

export const SliderButtonWrapper = styled.div`
  background-color: ${colors.primary};
  border-radius: 50%;
  padding: 5px;
`;
export const SliderButton = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  bottom: 20px;
  justify-content: center;
  gap: 30px;
`;
