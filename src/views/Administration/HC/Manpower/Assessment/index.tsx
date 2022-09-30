import TabV3 from "molecules/TabV3";
import React, { useState } from "react";
import { TitleText, WrapperTitle } from "views/Administration/styles";
import { Wrapper } from "./styles";

const p2hTab = ["End Contract", "Promotion", "Monitoring pkwtt"];

// function renderTabContent(e: number) {
// 	return e
// }

export default function Assessment() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Wrapper>
			<TabV3 tabsData={p2hTab} activeTab={activeTab} setActiveTab={setActiveTab} />
			<WrapperTitle>
				<TitleText>{p2hTab[activeTab]}</TitleText>
			</WrapperTitle>
			{/* {renderTabContent(activeTab)} */}
		</Wrapper>
	);
}
