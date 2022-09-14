import { Grid } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import React, { useState } from "react";
import LabelValue from "src/components/organism/LabelValue";
import { ProductionPerfromanceData } from "utils/dummy";
import { colors, fontSizing, fontWeights } from "utils/styles";
import { Item, ItemContainer } from "../styles";
import ProductionPerformanceTabHeader from "./ProductionPerformanceTabHeader";
import {
  AchContainer,
  AchLabel,
  Container,
  TabsAch,
  TabsAchContainer,
  TitleContainer,
} from "./styles";

const tabsText = ["YTD", "MTD", "WTD"];
const tabsObText = ["JS", "TC"];

export default function ProductionPerformance() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTabOb, setActiveTabOb] = useState(0);

  const handleActiveOb = (no: number) => {
    setActiveTabOb(no);
  };

  return (
    <>
      <Grid
        style={{ margin: "0 0 30px" }}
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <TitlePage
          type="h4"
          styles={{
            fontSize: fontSizing.md.fontSize,
            fontWeight: fontWeights.bold,
          }}
        >
          Production Performance
        </TitlePage>
        <Container>
          {tabsText.map((item, index) => (
            <ProductionPerformanceTabHeader
              title={item}
              key={index}
              id={index}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
          ))}
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
                    <TitlePage
                      styles={{
                        color: colors.orange,
                        fontSize: fontSizing.sm.fontSize,
                      }}
                      type="h4"
                    >
                      {data.title}
                    </TitlePage>
                    {data.title === "OB" && (
                      <TabsAchContainer>
                        {tabsObText.map((item, number) => {
                          return (
                            <TabsAch
                              key={number}
                              style={{
                                backgroundColor:
                                  activeTabOb === number
                                    ? colors.orange
                                    : "inherit",
                                color: activeTabOb === number ? "white" : "",
                              }}
                              onClick={() => handleActiveOb(number)}
                            >
                              {item}
                            </TabsAch>
                          );
                        })}
                      </TabsAchContainer>
                    )}
                  </TitleContainer>
                  <AchContainer>
                    {data.ach && <AchLabel>{data.ach}</AchLabel>}
                    <img
                      src={`/icons/${data.icon}`}
                      width={25}
                      alt="ProductionPerfromance icon"
                    />
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
