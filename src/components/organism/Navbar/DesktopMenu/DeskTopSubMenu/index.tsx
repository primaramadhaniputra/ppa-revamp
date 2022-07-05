import React from "react";
import { StyledCard, StyledText } from "./styles";

interface IProps {
  data: {
    [x: string]: any;
  }[];
}

export default function DeskTopSubMenu({ data }: IProps) {
  return (
    <StyledCard>
      {data.map((item, index) => {
        return <StyledText key={index}>{item.subMenuTitle}</StyledText>;
      })}
    </StyledCard>
  );
}
