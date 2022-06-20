import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  ${mediaQueries.lg} {
    padding-top: 50px;
    justify-content: flex-start;
  }
`;
