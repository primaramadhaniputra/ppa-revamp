import TabV3 from "molecules/TabV3";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Wrapper } from "./styles";

const Achievement = dynamic(() => import("./Achievement"), { ssr: false });
const ActivityReport = dynamic(() => import("./ActivityReport"), { ssr: false });

const p2hTab = ["ACHIEVEMENT", "ACTIVITY REPORT"];

function renderTabContent(e: String) {
	if (e === "ACHIEVEMENT") {
		return <Achievement />;
	} else if (e === "ACTIVITY REPORT") {
		return <ActivityReport />;
	}
}

export default function SayaPeduli() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Wrapper>
			<TabV3 tabsData={p2hTab} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderTabContent(p2hTab[activeTab])}
		</Wrapper>
	);
}
