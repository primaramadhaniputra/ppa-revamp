import styled from "styled-components";
import { mediaQueries } from "utils/styles";

interface IFormWrapper {
  nameLogin?: string;
}

export const FormWrapper = styled.div<IFormWrapper>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  height: calc(100vh - 108px);
  ${mediaQueries.lg} {
    height: auto;
    padding-top: 50px;
    order: ${(props) => (props.nameLogin === "secondLogin" ? 0 : 1)};
    justify-content: flex-start;
    box-shadow: -3px 0px 20px rgba(0, 0, 0, 0.3);
    clip-path: inset(0px 0px 0px -20px);
    z-index: 1;
  }
`;
