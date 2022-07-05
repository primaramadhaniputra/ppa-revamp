import React from "react";
import HaulerPerformance from "./HaulerPerformance";
import PlantPerformance from "./PlantPerformance";
import ProductionPerformance from "./ProductionPerformance";
import { Wrapper } from "./styles";

export default function Banner() {
  return (
    <Wrapper>
      <ProductionPerformance />
      <HaulerPerformance />
      <PlantPerformance />
    </Wrapper>
  );
}
