import TabV2 from "molecules/TabV2";
import React, { useState } from "react";
import { TitleText, Wrapper, WrapperTitle } from "views/Administration/styles";

const tabTitle = ["IN", "OUT"];

export default function ST() {
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