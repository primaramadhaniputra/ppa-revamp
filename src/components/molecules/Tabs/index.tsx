import React from "react";
import { TabText, Wrapper } from "./styles";

interface IProps {
  activeTab: number;
  setactiveTab: React.Dispatch<React.SetStateAction<number>>;
}

export const tabMenu = ["Account", "Password", "Admin"];

export default function Tabs({ activeTab, setactiveTab }: IProps) {
  return (
    <Wrapper>
      {tabMenu.map((item, index) => (
        <TabText
          onClick={() => setactiveTab(index)}
          key={index}
          activeTab={activeTab === index}
        >
          {item}
        </TabText>
      ))}
    </Wrapper>
  );
}
