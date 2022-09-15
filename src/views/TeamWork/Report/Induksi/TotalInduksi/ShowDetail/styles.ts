import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontSizing, fontWeights } from "utils/styles";

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

export const Container = styled.div`
  background-color: white;
  height: max-content;
  margin-top: 50px;
  width: 100%;
  max-width: 500px;
  padding: 20px;
`;

export const Title = styled.p`
  font-family: ${fontFamilies.poppins};
`;

export const StyledP = styled.p`
  font-family: ${fontFamilies.poppins};
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizing.xs.fontSize};
  min-width: 70px;
`;

export const DataContainer = styled.div`
  display: flex;
  gap: 10px;
  & :nth-child(2) {
    font-family: ${fontFamilies.poppins};
    font-size: ${fontSizing.xs.fontSize};
  }
`;

export const Table = styled.table`
  border: 1px solid #1c6ea4;
  background-color: #eeeeee;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  & td,
  & th {
    border: 1px solid #aaaaaa;
    padding: 3px 2px;
    text-align: center;
  }
  & tbody td {
    font-size: 13px;
  }

  & thead {
    background: ${colors.blueSky};
  }
`;
