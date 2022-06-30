import styled from "styled-components";
import { colors, fontSizing, mediaQueries } from "utils/styles";

export const Table = styled.table`
  width: 100%;
  background-color: #ffffff;
  border-collapse: separate;
  border-width: 0px;
  border-color: #ffcc00;
  border-style: solid;
  color: #3d0000;
  max-width: 1400px;
`;

export const THead = styled.thead`
  background-color: ${colors.primary};
  color: white;
`;

export const TBody = styled.tbody`
  text-align: center;
  ${mediaQueries.sm} {
    box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
      6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
      12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
      22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
      41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
      100px 100px 80px rgba(0, 0, 0, 0.07);
  }
`;

export const TH = styled.th`
  border-width: 1px;
  border-style: solid;
  padding: 10px;
`;

export const TD = styled.td`
  border-width: 0px;
  border-color: #ffcc00;
  border-style: solid;
  padding: 10px;
  padding-bottom: 40px;
  font-size: ${fontSizing.sm.fontSize};
`;
