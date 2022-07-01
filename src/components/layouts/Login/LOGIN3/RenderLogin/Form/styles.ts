import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  height: calc(100vh - 108px);
  ${mediaQueries.lg} {
    height: auto;
    padding: 50px;
    justify-content: flex-start;
  }
`;

export const FooterContainer = styled.div`
  display: none;
  ${mediaQueries.lg} {
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`;