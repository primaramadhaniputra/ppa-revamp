import Link from "next/link";
import React from "react";
import { StyledCard, StyledText } from "./styles";

interface IProps {
  data: {
    [x: string]: any;
  }[];
  isActive: boolean;
  style?: React.CSSProperties;
  width?: string;
}

export default function DeskTopSubMenu({
  data,
  isActive,
  style,
  width,
}: IProps) {
  return (
    <StyledCard isActive={isActive} style={style} width={width}>
      {data.map((item, index) => {
        return (
          <Link href={`/dashboard/${item.subMenuLink}`}>
            <StyledText key={index}>{item.subMenuTitle}</StyledText>
          </Link>
        );
      })}
    </StyledCard>
  );
}
