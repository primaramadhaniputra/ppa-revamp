import TabV2 from "molecules/TabV2";
import React, { useState } from "react";
import { TitleText, WrapperTitle, Wrapper } from "views/Administration/styles";

const tabTitle = [
	"HOLIDAY",
	"ATTENDANCE INDEX",
	"ATTENDANCE INDEX(BETA)",
	"PERMI INDEX",
	"INDIVIDUAL INDEX",
	"PREMI",
	"OVERTIME",
	"DAR",
];

export default function TimeManagement() {
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
