import { Grid } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

interface IWrapper {
  type?: string;
}

export const Wrapper = styled(Grid)<IWrapper>`
  ${mediaQueries.lg} {
    position: absolute !important;
    z-index: 99;
    right: ${(props) => (props.type ? "-235px" : "auto")};
    left: ${(props) => (props.type ? "auto" : "-235px")};
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Container = styled.div`
  background-color: white;
  ${mediaQueries.lg} {
    border-radius: 5px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  height: calc(100vh - 64px);
  ${mediaQueries.lg} {
    height: auto;
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
