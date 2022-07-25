import { Grid } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import React from "react";
import LabelValue from "src/components/organism/LabelValue";
import { ProductionPerfromanceData } from "utils/dummy";
import { colors, fontSizing, fontWeights } from "utils/styles";
import { Item, ItemContainer } from "../styles";
import { AchContainer, AchLabel, Container, TabsAch, TabsAchContainer, TabsText, TitleContainer } from "./styles";

export default function ProductionPerformance() {
  return (
    <>
      <Grid style={{ margin: "0 0 30px", }} container alignItems="center" justifyContent="space-between" >
        <TitlePage type="h4" styles={{ fontSize: fontSizing.md.fontSize, fontWeight: fontWeights.bold }} >
          Production Performance
        </TitlePage>
        <Container  >
          <TabsText style={{ backgroundColor: colors.orange, fontWeight: fontWeights.bold, color: 'white' }} >
            YTD
          </TabsText>
          <TabsText>
            MTD
          </TabsText>
          <TabsText>
            WTD
          </TabsText>
        </Container>
      </Grid>
      <ItemContainer>
        {ProductionPerfromanceData.map((data, index) => {
          return (
            <Item key={index}>
              <Grid container flexDirection="column" gap={20}>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <TitleContainer>
                    <TitlePage styles={{ color: colors.orange, fontSize: fontSizing.sm.fontSize }} type="h4">
                      {data.title}
                    </TitlePage>
                    {data.title === 'OB' &&
                      <TabsAchContainer>
                        <TabsAch style={{ backgroundColor: colors.orange, color: 'white' }}>JS</TabsAch>
                        <TabsAch >TC</TabsAch>
                      </TabsAchContainer>
                    }
                  </TitleContainer>

                  {/* <Image
                    src={`/icons/${data.icon}`}
                    width={30}
                    height={30}
                    quality={100}
                    alt="ProductionPerfromance icon"
                  /> */}
                  <AchContainer >
                    {data.ach && <AchLabel>{data.ach}</AchLabel>}
                    <img src={`/icons/${data.icon}`} width={25} alt="ProductionPerfromance icon" />
                  </AchContainer>
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
