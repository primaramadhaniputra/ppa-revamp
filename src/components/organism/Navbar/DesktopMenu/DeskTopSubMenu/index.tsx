import Cookies from "js-cookie";
import Link from "next/link";
import React from "react";
import { notify } from "utils/functions";
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
  const handleLogout = (e: string) => {
    if (e === "Logout") {
      Cookies.remove("token");
      return notify("Anda berhasil logout", "success");
    }
    return e;
  };

  return (
    <StyledCard isActive={isActive} style={style} width={width}>
      {data.map((item, index) => {
        return (
          <Link href={`/dashboard/${item.subMenuLink}`} key={index}>
            <StyledText onClick={() => handleLogout(item.subMenuTitle)}>
              {item.subMenuTitle}
            </StyledText>
          </Link>
        );
      })}
    </StyledCard>
  );
}
