import styled from "styled-components";

export const Wrapper = styled.div`
  /* box-shadow: 10px 10px 10px 10px black; */
  margin-top: 20px;
`;

export const ItemContainer = styled.div`
  display: flex;
  gap: 31px;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  background-color: #f7f7f7;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  flex: 1;
  min-width: 300px;
  border-radius: 5px;
  padding: 10px 15px;
`;
