import { Grid, Text } from "@hudoro/neron";
import React from "react";
import { fontWeights } from "utils/styles";
import LeftItem from "./LeftItem";
import RightItem from "./RightItem";
import { ItemContainer, Wrapper } from "./styles";
import TopFilter from "./TopFilter";

export default function TurnOver() {

  return (
    <Wrapper>
      <Grid container gap={20} justifyContent='space-between' alignItems="center" style={{ margin: '30px 0' }}>
        <Text variant="h3" style={{ fontWeight: fontWeights.bold, fontSize: '22px' }} >Teamwork / Report / Turn Over</Text>
      </Grid>
      <TopFilter />
      <ItemContainer  >
        <LeftItem />
        <RightItem />
      </ItemContainer>
    </Wrapper>
  );
}
