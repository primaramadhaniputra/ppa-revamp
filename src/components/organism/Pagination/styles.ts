import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontWeights } from "utils/styles";

export const Container = styled.div`
  & ul {
    display: flex;
  }

  & ul li {
    list-style: none;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 5px 7px;
    font-family: ${fontFamilies.poppins};
    cursor: pointer;
  }
  & .activePage {
    background-color: ${colors.orange};
    color: ${colors.white};
    font-weight: ${fontWeights.bold};
  }
`;
