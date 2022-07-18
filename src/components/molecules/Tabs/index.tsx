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
      <TabText
        style={{ color: activeTab === 0 ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.3)" }}
      >
        Pengaturan Profile
      </TabText>
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
