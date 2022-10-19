import TabV4 from "molecules/TabV4";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Wrapper } from "./styles";

const VHMS = dynamic(() => import("./Vhms"));
const CCR = dynamic(() => import("./ccr"));

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
