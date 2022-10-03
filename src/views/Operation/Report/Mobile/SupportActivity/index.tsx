import TabV3 from "molecules/TabV3";
import React, { useState } from "react";
import { TitleText, WrapperTitle } from "../styles";
import Fuel from "./Fuel";
import Lube from "./Lube";

const tabTitle = ["Fuel", "Lube", "Transportation"];

const renderContent = (type: string) => {
	if (type === "Fuel") {
		return <Fuel />;
	}
	if (type === "Lube") {
		return <Lube />;
	}
};

export default function SupportActivity() {
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
