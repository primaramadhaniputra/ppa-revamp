import React from "react";
import LeftItem from "./LeftItem";
import RightItem from "./RightItem";
import {
  ItemContainer,
  TitleText,
  Wrapper,
  WrapperTable,
  WrapperTitle,
} from "./styles";
import TopFilter from "./TopFilter";

export default function TurnOver() {
  return (
    <Wrapper>
      <WrapperTitle>
        <TitleText> Turn Over</TitleText>
      </WrapperTitle>
      <WrapperTable>
        <TopFilter />
        <ItemContainer>
          <LeftItem />
          <RightItem />
        </ItemContainer>
      </WrapperTable>
    </Wrapper>
  );
}
