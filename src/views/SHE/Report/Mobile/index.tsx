import React, { useState } from "react";
import P2H from "./P2H";
import { TabsWrapper, TabText, Wrapper } from "./styles";

const tabTitle = ["P2H", "Saya Peduli", "SAP", "Fit To Work"];

export default function Mobile() {
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Wrapper>
      <TabsWrapper>
        {tabTitle.map((item, index) => (
          <TabText
            key={index}
            activeTab={activeTab === index ? true : false}
            onClick={() => handleActiveTab(index)}
          >
            {item}
          </TabText>
        ))}
      </TabsWrapper>
      {activeTab === 0 && <P2H />}
    </Wrapper>
  );
}
