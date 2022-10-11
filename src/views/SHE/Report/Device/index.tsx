import TabV2 from "molecules/TabV2";
import React, { useState } from "react";
import { TitleText, Wrapper, WrapperTitle } from "./styles";

const tabTitle = [
	"Road Tracking",
	"Fatigue Monitor",
	"Fleet Monitoring",
	"Speed",
	"Dump Control",
	"Enviro",
];

export default function Device() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Wrapper>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			<WrapperTitle>
				<TitleText>{tabTitle[activeTab]}</TitleText>
			</WrapperTitle>
		</Wrapper>
	);
}