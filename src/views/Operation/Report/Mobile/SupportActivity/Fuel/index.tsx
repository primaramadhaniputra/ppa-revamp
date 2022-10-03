import TabV4 from "molecules/TabV4";
import React, { useState } from "react";
import Refueling from "./Refueling";
import { Wrapper } from "./styles";
import Summary from "./Summary";

const tabText = ["SUMMARY", "REFUELING", "FLOWMETER"];

const renderContent = (type: string) => {
   if (type === "SUMMARY") {
      return <Summary />;
   } else if (type === "REFUELING") {
      return <Refueling />;
   }
};

export default function Fuel() {
   const [activeTab, setActiveTab] = useState(0);

   return (
      <Wrapper>
         <TabV4 tabText={tabText} activeTab={activeTab} setActiveTab={setActiveTab} />
         {renderContent(tabText[activeTab])}
      </Wrapper>
   );
}
