import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import Sap from "./Sap";
import { Wrapper } from "./styles";

const P2H = dynamic(() => import("./P2H"));
const SayaPeduli = dynamic(() => import("./SayaPeduli"));

const tabTitle = ["P2H", "Saya Peduli", "SAP", "Fit To Work"];

const renderContent = (type: string) => {
	if (type === "P2H") {
		return <P2H />;
	} else if (type === "Saya Peduli") {
		return <SayaPeduli />;
	} else if (type === "SAP") {
		return <Sap />;
	}
};

export default function Mobile() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Wrapper>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(tabTitle[activeTab])}
		</Wrapper>
	);
}
