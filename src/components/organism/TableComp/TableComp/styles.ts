import styled from "styled-components";
import { colors, fontWeights } from "utils/styles";

export const Wrapper = styled.div`
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 12px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`;

export const TABLE = styled.table`
  font-family: "Times New Roman", Times, serif;
  width: 100%;
  min-width: 1300px;
  text-align: center;
  border-collapse: collapse;
  padding: 20px;
  margin-top: 20px;
  & td {
    padding: 10px;
  }

  & th {
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  & tbody tr:nth-child(odd) {
    background: ${colors.blueSky};
  }

  & thead {
    /* background: ${colors.blueSky}; */
    /* border-top: 1px solid rgba(0, 0, 0, 0.2); */
  }

  & tbody {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    /* line-height: 21px; */
    color: #000000;
  }
  & thead th {
    font-family: "Poppins";
    font-style: normal;
    font-weight: ${fontWeights.bold};
    font-size: 14px;
    line-height: 21px;
    color: #000000;
    color: black;
    text-align: center;
    /* border: 1px solid rgba(0, 0, 0, 0.2); */
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
