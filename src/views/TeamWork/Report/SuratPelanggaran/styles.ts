import { Card, Grid, Text } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights, mediaQueries } from "utils/styles";

export const ThItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ArrowUp = styled.div`
  width: 0;
  height: 0;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;

  border-bottom: 5px solid black;
`;

export const ArrowDown = styled.div`
  width: 0;
  height: 0;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  margin-top: 2px;
  border-top: 5px solid black;
`;

export const Wrapper = styled(Card)`
  margin-top: 10px;
  padding: 0;
  box-shadow: none;
  border-radius: 3px;
  background-color: transparent;
  /* ${mediaQueries.sm} {
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
        padding: 20px;
    } */
`;

export const WrapperTitle = styled(Grid).attrs({
  container: true,
})`
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  ${mediaQueries.md} {
    background-color: white;
    padding: 10px 15px;
  }
`;
export const WrapperTable = styled(Grid)`
  margin-top: 20px;
  ${mediaQueries.md} {
    background-color: white;
    padding: 15px;
  }
`;

export const TitleText = styled(Text).attrs({
  variant: "h3",
})`
  font-weight: ${fontWeights.bold};
  font-size: 18px;
  ${mediaQueries.md} {
    font-size: 22px;
  }
`;
