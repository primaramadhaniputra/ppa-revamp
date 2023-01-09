import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import SupportActivity from "./SupportActivity";
import AchOperator from "./AchOperator";

const HmOperator = dynamic(() => import("./HmOperator"), { ssr: false });
const HmByActivity = dynamic(() => import("./HmByActivity"), { ssr: false });

const tabTitle = ["HM Operator", "HM By Activity", "Support Activity", "ACH Operator"];

const renderContent = (activeTab: number) => {
	if (activeTab === 0) {
		return <HmOperator />;
	} else if (activeTab === 1) {
		return <HmByActivity />;
	} else if (activeTab === 2) {
		return <SupportActivity />;
	} else if (activeTab === 3) {
		return <AchOperator />;
	}
};

export default function Mobile() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(activeTab)}
		</>
	);
}
