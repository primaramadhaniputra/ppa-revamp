import TabV3 from "molecules/TabV3";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { TitleText, WrapperTitle } from "views/Administration/styles";
import { Wrapper } from "./styles";

const p2hTab = ["End Contract", "Promotion", "Monitoring pkwtt"];

const Promotion = dynamic(() => import("./Promotion"), {
	ssr: false,
});
const MonitoringPkwt = dynamic(() => import("./MonitoringPkwt"), {
	ssr: false,
});
const EndContract = dynamic(() => import("./EndContract"), {
	ssr: false,
});

function renderTabContent(e: number) {
	if (e === 1) {
		return <Promotion />;
	} else if (e === 2) {
		return <MonitoringPkwt />;
	} else {
		return <EndContract />;
	}
}

export default function Assessment() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Wrapper>
			<TabV3 tabsData={p2hTab} activeTab={activeTab} setActiveTab={setActiveTab} />
			<WrapperTitle>
				<TitleText>{p2hTab[activeTab]}</TitleText>
			</WrapperTitle>
			{renderTabContent(activeTab)}
		</Wrapper>
	);
}
