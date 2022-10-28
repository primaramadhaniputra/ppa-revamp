import TabV3 from "molecules/TabV3";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Wrapper } from "../styles";

const Road = dynamic(() => import("./Road"), {
	ssr: false,
});

const tabTitle = ["Pit", "Road", "Temperature", "Humidity", "Noise"];

const renderContent = (type: string) => {
	if (type === "Road") {
		return <Road />;
	}
};

export default function Enviro() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Wrapper>
			<TabV3 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(tabTitle[activeTab])}
		</Wrapper>
	);
}
