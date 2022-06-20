import { fontFamilies, Grid } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import React from "react";
import LabelValue from "src/components/organism/LabelValue";
import { ProductionPerfromanceData } from "utils/dummy";
import { Item, ItemContainer } from "./styles";

export default function ProductionPerformance() {
  return (
    <>
      <TitlePage type="h4" sizing="24px" styles={{ margin: "50px 0 30px" }}>
        {" "}
        Production Performance{" "}
      </TitlePage>
      <ItemContainer>
        {ProductionPerfromanceData.map((data, index) => {
          return (
            <Item key={index}>
              <Grid container flexDirection="column" gap={20}>
                <TitlePage
                  type="h4"
                  sizing="18px"
                  styles={{
                    fontFamily: `${fontFamilies.poppins}`,
                    fontWeight: "500",
                    lineHeight: "18px",
                  }}
                >
                  {" "}
                  {data.title}{" "}
                </TitlePage>
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
