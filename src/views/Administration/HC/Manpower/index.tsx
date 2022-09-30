import TabV2 from "molecules/TabV2";
import React, { useState } from "react";
import { Wrapper, WrapperTitle, TitleText } from "views/Administration/styles";
import Assessment from "./Assessment";

const tabTitle = [
	"PERSONEL",
	"PERSONEL V.2",
	"AGREEMENT",
	"ASSESSMENT",
	"EMPLOYEE NON-ACTIVE",
	"HISTORY GRADE AND POST",
	"RESET DEVICE",
];

export default function Manpower() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Wrapper>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			{activeTab === 3 ? (
				<Assessment />
			) : (
				<WrapperTitle>
					<TitleText>{tabTitle[activeTab]}</TitleText>
				</WrapperTitle>
			)}
		</Wrapper>
	);
}
