import { Grid } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import Image from "next/image";
import React from "react";
import LabelValue from "src/components/organism/LabelValue";
import { PlanPerfromanceData } from "utils/dummy";
import { colors } from "utils/styles";
import { Item, ItemContainer } from "../styles";

export default function PlantPerformance() {
  return (
    <>
      <TitlePage type="h4" styles={{ margin: "50px 0 30px" }}>
        {" "}
        Plant Performance{" "}
      </TitlePage>
      <ItemContainer>
        {PlanPerfromanceData.map((data, index) => {
          return (
            <Item key={index}>
              <Grid container flexDirection="column" gap={20}>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <TitlePage styles={{ color: colors.orange }} type="h4">
                    {data.title}
                  </TitlePage>
                  <Image src={`/icons/${data.icon}`} width={30} height={30} />
                </Grid>
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
