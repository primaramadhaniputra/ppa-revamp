import { Grid } from "@hudoro/neron";
import Image from "next/image";
import React from "react";
import { convertDataToPercentage } from "utils/functions";
import { allSites } from "utils/interfaces";
import { ProductText, ProductTitle } from "../styles";
import {
  Lozenge,
  SingleProduct,
  Title,
  Wrapper,
  WrapperProduct,
} from "./styles";

interface IProps {
  sites: allSites[];
}

export default function TotalSites({ sites }: IProps) {
  const data = sites?.reduce(
    (acc, curr) => {
      curr.data.map((item) => {
        if (item.name === "Over Burden") {
          acc.obPlan += parseFloat(item.plan as string) || 0;
          acc.obProduction += parseFloat(item.production as string) || 0;
        } else if (item.name === "Coal") {
          acc.coalPlan += parseFloat(item.plan as string) || 0;
          acc.coalProduction += parseFloat(item.production as string) || 0;
        } else if (item.name === "Ore") {
          acc.orePlan += parseFloat(item.plan as string) || 0;
          acc.oreProduction += parseFloat(item.production as string) || 0;
        }
      });
      return acc;
    },
    {
      obPlan: 0,
      obProduction: 0,
      coalPlan: 0,
      coalProduction: 0,
      orePlan: 0,
      oreProduction: 0,
    }
  );

  return (
    <Wrapper>
      <Grid
        style={{ marginBottom: "31px" }}
        container
        alignItems="center"
        gap={15}
      >
        <ProductTitle style={{ marginTop: "0" }}>Total All Sites</ProductTitle>
        <Image
          src="/logo/production2.png"
          width={37}
          height={37}
          alt="ppa logo"
        />
      </Grid>
      <WrapperProduct>
        <SingleProduct style={{ gridArea: "ob" }}>
          <Grid container alignItems="center" gap={10}>
            <Image
              src="/icons/CheckCircle.png"
              width={28}
              height={28}
              alt="circle logo"
            />
            <Title>OB Kbcm</Title>
          </Grid>
          <Lozenge>
            {convertDataToPercentage(data?.obPlan, data?.obProduction)}%
          </Lozenge>
          <Grid
            container
            justifyContent="space-between"
            style={{ marginBottom: "20px" }}
          >
            <Grid container gap={5}>
              <Image
                src="/images/Ic-Target.png"
                height={16}
                width={16}
                alt="product logo"
                quality={100}
              />
              <ProductText>P</ProductText>
            </Grid>
            <ProductText>{data?.obPlan || 0}</ProductText>
          </Grid>
          <Grid container justifyContent="space-between">
            <Grid container gap={5}>
              <Image
                src="/images/Ic-Trophy.png"
                height={20.5}
                width={16}
                alt="product logo"
                quality={100}
              />
              <ProductText>A</ProductText>
            </Grid>
            <ProductText>{data?.obProduction || 0}</ProductText>
          </Grid>
        </SingleProduct>
        <SingleProduct style={{ gridArea: "coal" }}>
          <Grid container alignItems="center" gap={10}>
            <Image
              src="/icons/coal.png"
              width={28}
              height={28}
              alt="circle logo"
            />
            <Title>COAL Kton</Title>
          </Grid>
          <Lozenge style={{ backgroundColor: "#EB3B3B" }}>
            {convertDataToPercentage(data?.coalPlan, data?.coalProduction)}%
          </Lozenge>
          <Grid
            container
            justifyContent="space-between"
            style={{ marginBottom: "20px" }}
          >
            <Grid container gap={5}>
              <Image
                src="/images/Ic-Target.png"
                height={16}
                width={16}
                alt="product logo"
                quality={100}
              />
              <ProductText>P</ProductText>
            </Grid>
            <ProductText>{data?.coalPlan || 0}</ProductText>
          </Grid>
          <Grid container justifyContent="space-between">
            <Grid container gap={5}>
              <Image
                src="/images/Ic-Trophy.png"
                height={20.5}
                width={16}
                alt="product logo"
                quality={100}
              />
              <ProductText>A</ProductText>
            </Grid>
            <ProductText>{data?.coalProduction || 0}</ProductText>
          </Grid>
        </SingleProduct>
        <SingleProduct style={{ gridArea: "ore" }}>
          <Grid container alignItems="center" gap={10}>
            <Image
              src="/icons/coal.png"
              width={28}
              height={28}
              alt="circle logo"
            />
            <Title>ORE Kton</Title>
          </Grid>
          <Lozenge style={{ backgroundColor: "#EB3B3B" }}>
            {convertDataToPercentage(data?.orePlan, data?.oreProduction)}%
          </Lozenge>
          <Grid
            container
            justifyContent="space-between"
            style={{ marginBottom: "20px" }}
          >
            <Grid container gap={5}>
              <Image
                src="/images/Ic-Target.png"
                height={16}
                width={16}
                alt="product logo"
                quality={100}
              />
              <ProductText>P</ProductText>
            </Grid>
            <ProductText>{data?.orePlan || 0}</ProductText>
          </Grid>
          <Grid container justifyContent="space-between">
            <Grid container gap={5}>
              <Image
                src="/images/Ic-Trophy.png"
                height={20.5}
                width={16}
                alt="product logo"
                quality={100}
              />
              <ProductText>A</ProductText>
            </Grid>
            <ProductText>{data?.oreProduction || 0}</ProductText>
          </Grid>
        </SingleProduct>
      </WrapperProduct>
    </Wrapper>
  );
}
