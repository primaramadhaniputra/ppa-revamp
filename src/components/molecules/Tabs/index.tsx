import React from "react";
import { fontWeights } from "utils/styles";
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
        style={{
          fontWeight: activeTab === 0 ? fontWeights.bold : fontWeights.regular,
        }}
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
