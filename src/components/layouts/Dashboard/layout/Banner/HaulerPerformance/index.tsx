import { Grid } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import Image from "next/image";
import React from "react";
import LabelValue from "src/components/organism/LabelValue";
import { HaulerPerformanceData } from "utils/dummy";
import { colors } from "utils/styles";
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
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <TitlePage styles={{ color: colors.orange }} type="h4">
                    {data.title}
                  </TitlePage>
                  <Image
                    src={`/icons/${data.icon}`}
                    width={25}
                    height={25}
                    quality={100}
                  />
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
