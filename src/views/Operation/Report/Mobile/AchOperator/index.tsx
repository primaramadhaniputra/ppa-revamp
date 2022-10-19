import TabV3 from "molecules/TabV3";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { TitleText, WrapperTitle } from "../styles";

const TimeSheet = dynamic(() => import("./TimeSheet"));
const P2H = dynamic(() => import("./P2H"));

const tabTitle = ["Time Sheet", "P2H"];

const renderContent = (type: string) => {
	if (type === "Time Sheet") {
		return <TimeSheet />;
	} else if (type === "P2H") {
		return <P2H />;
	}
};

export default function AchOperator() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV3 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			<WrapperTitle>
				<TitleText>{tabTitle[activeTab]}</TitleText>
			</WrapperTitle>
			{renderContent(tabTitle[activeTab])}
		</>
	);
}
