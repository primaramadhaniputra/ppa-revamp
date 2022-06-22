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
  ${mediaQueries.lg} {
    padding-top: 50px;
    order: ${(props) => (props.nameLogin === "secondLogin" ? 0 : 1)};
    justify-content: flex-start;
  }
`;
