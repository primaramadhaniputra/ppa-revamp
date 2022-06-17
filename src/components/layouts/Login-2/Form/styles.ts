import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

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

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  ${mediaQueries.lg} {
    order: 1;
  }
`;
