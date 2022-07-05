import { Grid } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import React from "react";
import LabelValue from "src/components/organism/LabelValue";
import { HaulerPerformanceData } from "utils/dummy";
import { Item, ItemContainer } from "../styles";

export default function HaulerPerformance() {
  return (
    <>
      <TitlePage type="h4" styles={{ margin: "50px 0 30px" }}>
        {" "}
        Hauler Performance{" "}
      </TitlePage>
      <ItemContainer>
        {HaulerPerformanceData.map((data, index) => {
          return (
            <Item key={index}>
              <Grid container flexDirection="column" gap={20}>
                <TitlePage type="h4">{data.title} </TitlePage>
                <Grid container flexDirection="column" gap={15}>
                  <LabelValue data={data.plan} />
                  <LabelValue data={data.act} />
                </Grid>
              </Grid>
            </Item>
          );
        })}
      </ItemContainer>
    </>
  );
}
