import { Icon, IIconProps } from "@hudoro/neron";
import React from "react";
import { SliderButtonWrapper } from "./styles";

interface IProps {
  iconName: IIconProps["iconName"];
  onClick: () => void;
}

export default function ButtonSlide({ iconName, onClick }: IProps) {
  return (
    <SliderButtonWrapper>
      <Icon
        iconName={iconName}
        size={24}
        style={{ cursor: "pointer" }}
        color="white"
        onClick={onClick}
      />
    </SliderButtonWrapper>
  );
}
