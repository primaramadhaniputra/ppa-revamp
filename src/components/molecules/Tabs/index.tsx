import React from "react";
import { tabMenu } from "utils/dummy";
import { colors as c } from "utils/styles";
import { colors } from "@hudoro/neron";
import { TabText, Wrapper } from "./styles";

interface IProps {
  activeTab: number;
  setactiveTab: React.Dispatch<React.SetStateAction<number>>;
}

export default function Tabs({ activeTab, setactiveTab }: IProps) {
  return (
    <Wrapper>
      {tabMenu.map((item, index) => (
        <TabText
          onClick={() => setactiveTab(index)}
          key={index}
          style={{ color: activeTab === index ? c.primary : colors.black[100] }}
        >
          {item}
        </TabText>
      ))}
    </Wrapper>
  );
}
