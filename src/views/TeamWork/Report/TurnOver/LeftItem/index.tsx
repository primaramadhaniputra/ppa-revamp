import React from "react";
import {
  ColorItem,
  InfoContainer,
  TextDate,
  TextInfo,
  TextSite,
  TextTurnOverPercent,
  Wrapper,
} from "./styles";

export default function LeftItem() {
  return (
    <Wrapper>
      <TextSite>Site MHU</TextSite>
      <TextDate>
        Current Date<span> 25 / 5 / 2022</span>
      </TextDate>
      <TextTurnOverPercent>Turn Over 1.03 %</TextTurnOverPercent>
      <InfoContainer>
        <ColorItem></ColorItem>
        <TextInfo>Turn Over Involuntary Employee (PHK) 0.28%</TextInfo>
      </InfoContainer>
      <InfoContainer style={{ marginTop: "30px" }}>
        <ColorItem style={{ backgroundColor: "#3B7DDD" }}></ColorItem>
        <TextInfo>Turn Over Involuntary Employee (PHK) 0.28%</TextInfo>
      </InfoContainer>
    </Wrapper>
  );
}
