import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, fontWeights } from "utils/styles";

export const Wrapper = styled.div`
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 12px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
    /* border-radius: 10px; */
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`;

export const TABLE = styled.table`
  font-family: ${fontFamilies.poppins};
  width: 100%;
  /* min-width: 1300px; */
  text-align: center;
  border-collapse: collapse;
  padding: 20px;
  margin-top: 20px;
  font-size: ${fontSizing.md.fontSize};
  & td {
    padding: 10px;
    /* font-family: ${fontFamilies.poppins}; */
  }

  & tr {
    /* font-family: ${fontFamilies.poppins}; */
  }

  & th {
    padding: 5px;
  }
  & tbody tr:nth-child(odd) {
    background: ${colors.blueSky};
    /* font-family: ${fontFamilies.poppins}; */
  }

  & thead {
    /* background: ${colors.blueSky}; */
    /* border-top: 1px solid rgba(0, 0, 0, 0.2); */
    /* font-family: ${fontFamilies.poppins}; */
  }

  & tbody {
    /* font-family: ${fontFamilies.poppins}; */
    font-style: normal;
    /* font-weight: 400; */
    /* font-size: 14px; */
    /* line-height: 21px; */
    color: rgba(0, 0, 0, 0.8);
  }

  & thead th {
    /* font-family: ${fontFamilies.poppins}; */
    font-style: normal;
    font-weight: ${fontWeights.semi};
    /* font-size: 14px; */
    line-height: 21px;
    color: #000000;
    color: black;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    &.hidden {
      display: none;
    }
    text-align: center;
    vertical-align: middle;
    /* min-width: 150px; */
  }

  & thead th > div > div {
    display: flex;
    justify-content: center;
  }
  & thead th > div > span > span {
    display: inline-block;
    transform: rotate(90deg);
  }

  & tfoot > tr > th div label {
    text-align: start;
  }

  /* & tfoot {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #000000;
        color: black;
        text-align: center;
    }

    & tfoot td {
        font-size: 14px;
    } */
`;

export const ThItemContainer = styled.div`
  cursor: pointer;
  min-width: 20px;
  display: flex;
  gap: 7px;
  justify-content: center;
`;
