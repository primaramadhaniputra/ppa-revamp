import styled from "styled-components";
import { mediaQueries } from "utils/styles";

interface ILoginImage {
  urlImage: string;
}

export const LoginImage = styled.div<ILoginImage>`
  height: 400px;
  width: 100%;
  background-image: ${(props) => `url(${props.urlImage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${mediaQueries.lg} {
    height: 955px;
    width: 100%;
  }
`;
