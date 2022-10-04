import TabV3 from "molecules/TabV3";
import React, { useState } from "react";
import { TitleText, WrapperTitle } from "../styles";
import TimeSheet from "./TimeSheet";

const tabTitle = ["Time Sheet", "P2H"];

const renderContent = (type: string) => {
	if (type === "Time Sheet") {
		return <TimeSheet />;
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
