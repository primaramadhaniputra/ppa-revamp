import TabV2 from "molecules/TabV2";
import React, { useState } from "react";
import P2H from "./P2H";
import { Wrapper } from "./styles";

const tabTitle = ["P2H", "Saya Peduli", "SAP", "Fit To Work"];

export default function Mobile() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Wrapper>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			{activeTab === 0 && <P2H />}
		</Wrapper>
	);
}
