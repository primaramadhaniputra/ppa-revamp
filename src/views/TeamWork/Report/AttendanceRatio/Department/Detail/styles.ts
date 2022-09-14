import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 50px;
`;

export const ThItemContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 7px;
  align-items: center;
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
