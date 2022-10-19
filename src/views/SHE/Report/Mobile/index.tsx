import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Wrapper } from "./styles";

const P2H = dynamic(() => import("./P2H"));

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
