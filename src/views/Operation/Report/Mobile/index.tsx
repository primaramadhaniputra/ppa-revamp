import TabV2 from "molecules/TabV2";
import React, { useState } from "react";
import AchOperator from "./AchOperator";
import HmByActivity from "./HmByActivity";
import HmOperator from "./HmOperator";
import SupportActivity from "./SupportActivity";

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
