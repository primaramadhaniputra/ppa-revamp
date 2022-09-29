import React, { useState } from "react";
import { TitleText, WrapperTitle } from "views/Administration/styles";
import { TabContainer, TabText, Wrapper } from "./styles";

const p2hTab = ["End Contract", "Promotion", "Monitoring pkwtt"];

// function renderTabContent(e: number) {
// 	return e
// }

export default function Assessment() {
	const [activeTab, setActiveTab] = useState(0);

	const handleActiveTab = (index: number) => {
		setActiveTab(index);
	};

	return (
		<Wrapper>
			<TabContainer>
				{p2hTab.map((item, index) => (
					<TabText
						key={index}
						activeTab={activeTab === index ? true : false}
						onClick={() => handleActiveTab(index)}
					>
						{item}
					</TabText>
				))}
			</TabContainer>
			<WrapperTitle>
				<TitleText>{p2hTab[activeTab]}</TitleText>
			</WrapperTitle>
			{/* {renderTabContent(activeTab)} */}
		</Wrapper>
	);
}
