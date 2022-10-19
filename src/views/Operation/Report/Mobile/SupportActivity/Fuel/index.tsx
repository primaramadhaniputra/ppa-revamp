import TabV4 from "molecules/TabV4";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Wrapper } from "./styles";

const Summary = dynamic(() => import("./Summary"));
const Refueling = dynamic(() => import("./Refueling"));
const Flowmeter = dynamic(() => import("./Flowmeter"));

const tabText = ["SUMMARY", "REFUELING", "FLOWMETER"];

const renderContent = (type: string) => {
	if (type === "SUMMARY") {
		return <Summary />;
	} else if (type === "REFUELING") {
		return <Refueling />;
	} else if (type === "FLOWMETER") {
		return <Flowmeter />;
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
