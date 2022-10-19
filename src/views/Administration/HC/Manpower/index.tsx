import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Wrapper, WrapperTitle, TitleText } from "views/Administration/styles";

const Assessment = dynamic(() => import("./Assessment"), {
	ssr: false,
});

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
