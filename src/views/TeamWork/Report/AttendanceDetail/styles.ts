import { Card, Grid, Text } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights, mediaQueries } from "utils/styles";

export const ThItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 5px;
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
  margin-top: 20px;
  padding: 0;
  box-shadow: none;
  border-radius: 3px;
  background-color: transparent;
  ${mediaQueries.md} {
    margin-top: 10px;
  }
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
