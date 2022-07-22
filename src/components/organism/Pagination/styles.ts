import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontWeights, mediaQueries } from "utils/styles";

export const Container = styled.div`
  overflow-x: scroll;
  ::-webkit-scrollbar {
    height: 0;
  }
  font-size: 12px;
  ${mediaQueries.md} {
    font-size: 15px;
  }
  & ul {
    display: flex;
  }

  & ul li {
    list-style: none;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 5px 10px;
    font-family: ${fontFamilies.poppins};
    cursor: pointer;
  }
  & .activePage {
    background-color: ${colors.orange};
    color: ${colors.white};
    font-weight: ${fontWeights.bold};
  }
`;
