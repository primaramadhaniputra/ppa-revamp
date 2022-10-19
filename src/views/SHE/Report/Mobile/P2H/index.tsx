import TabV3 from "molecules/TabV3";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { TitleText, WrapperTitle } from "../styles";
import { Wrapper } from "./styles";

const Temuan = dynamic(() => import("./Temuan"));
const Achievement = dynamic(() => import("./Achievement"));
const Monitoring = dynamic(() => import("./Monitoring"));
const Detail = dynamic(() => import("./Detail"));

const p2hTab = ["Detail", "Monitoring", "Temuan", "Achievement"];

function renderTabContent(e: number) {
	if (e === 3) {
		return <Achievement />;
	} else if (e === 2) {
		return <Temuan />;
	} else if (e === 1) {
		return <Monitoring />;
	} else {
		return <Detail />;
	}
}

export default function P2H() {
	const [activeTab, setActiveTab] = useState(3);

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
