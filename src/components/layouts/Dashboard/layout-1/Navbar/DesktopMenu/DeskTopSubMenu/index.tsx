import React from "react";
import { StyledCard, StyledText } from "./styles";

interface IProps {
  data: string[];
}

export default function DeskTopSubMenu({ data }: IProps) {
  return (
    <StyledCard>
      {data.map((item, index) => {
        return <StyledText key={index}>{item}</StyledText>;
      })}
    </StyledCard>
  );
}
