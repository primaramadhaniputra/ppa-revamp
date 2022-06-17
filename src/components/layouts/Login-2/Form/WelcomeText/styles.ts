import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";

interface IWelcomeText {
  weight: number;
  size: string;
  lineHeight: string;
}

export const WelcomeText = styled.p<IWelcomeText>`
  font-family: ${fontFamilies.poppins};
  font-style: normal;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.lineHeight};
`;
