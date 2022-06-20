import { Grid } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Wrapper = styled(Grid)`
  ${mediaQueries.lg} {
    position: absolute !important;
    z-index: 99;
    right: -250px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Container = styled.div`
  background-color: white;
  ${mediaQueries.lg} {
    border-radius: 5px;
    min-height: 659px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  ${mediaQueries.lg} {
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
