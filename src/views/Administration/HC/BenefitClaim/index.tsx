import TabV2 from "molecules/TabV2";
import React, { useState } from "react";
import { Wrapper, WrapperTitle, TitleText } from "views/Administration/styles";

const tabTitle = ["PLAFON", "REPORT BENEFIT CLAIM", "HISTORY CLAIM KACAMATA"];

export default function BenefitClaim() {
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
