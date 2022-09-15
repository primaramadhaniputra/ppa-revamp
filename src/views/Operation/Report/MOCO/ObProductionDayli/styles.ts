import { Card, fontFamilies, Grid } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontWeights, mediaQueries } from "utils/styles";

export const ThItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ArrowUp = styled.div`
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;

  border-bottom: 6px solid black;
`;

export const ArrowDown = styled.div`
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  margin-top: 2px;
  border-top: 6px solid black;
`;

export const Wrapper = styled(Card)`
  margin-top: 30px;
  padding: 0;
  box-shadow: none;
  border-radius: 3px;
  ${mediaQueries.sm} {
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
    padding: 20px;
  }
`;

export const StatusContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minMax(300px, 1fr));
  gap: 10px;
`;

export const SingleStatus = styled(Grid).attrs({
  container: true,
})`
  gap: 10px;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.primary};
  padding: 10px;
  color: white;
  font-weight: ${fontWeights.extraBold};
  border-radius: 3px;
  font-family: ${fontFamilies.poppins};
  & p {
    font-family: ${fontFamilies.poppins};
    font-weight: ${fontWeights.regular};
    font-size: 13px;
    letter-spacing: 1px;
  }
`;
