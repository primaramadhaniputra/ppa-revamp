import { Card, Grid, Text } from "@hudoro/neron";
import React from "react";
import { fontWeights } from "utils/styles";
import LeftItem from "./LeftItem";
import RightItem from "./RightItem";
import { ItemContainer } from "./styles";
import TopFilter from "./TopFilter";

export default function TurnOver() {

  return (
    <>
      <Grid container gap={20} justifyContent='space-between' alignItems="center" style={{ marginTop: '30px' }}>
        <Text variant="h3" style={{ fontWeight: fontWeights.bold }} >Teamwork / Report / Turn Over</Text>
      </Grid>
      <Card style={{ marginTop: '30px' }}>
        <TopFilter />
        <ItemContainer  >
          <LeftItem />
          <RightItem />
        </ItemContainer>
      </Card>
    </>
  );
}
