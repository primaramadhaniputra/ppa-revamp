import TabV4 from "molecules/TabV4";
import React, { useState } from "react";
import CCR from "./ccr";
import { Wrapper } from "./styles";
import VHMS from "./Vhms";

const tabs = ["CCR", "VHMS", "FMS DT", "FMS HD"];

const renderContent = (type: string) => {
	if (type === "CCR") {
		return <CCR />;
	}
	if (type === "VHMS") {
		return <VHMS />;
	}
};

export default function Hourly() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Wrapper>
			<TabV4 tabText={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(tabs[activeTab])}
		</Wrapper>
	);
}
