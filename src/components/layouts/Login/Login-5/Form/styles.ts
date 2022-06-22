import { Grid } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Wrapper = styled(Grid)`
  position: relative;
  background-color: white;
  ${mediaQueries.lg} {
    position: absolute !important;
    z-index: 99;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  ${mediaQueries.lg} {
    padding: 50px;
    justify-content: flex-start;
  }
`;

export const FooterContainer = styled.div`
  display: none;
  ${mediaQueries.lg} {
    display: block;
    width: 100%;
  }
`;
