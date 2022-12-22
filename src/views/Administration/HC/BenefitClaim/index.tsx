import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Wrapper, WrapperTitle, TitleText } from "views/Administration/styles";

const tabTitle = ["PLAFON", "REPORT BENEFIT CLAIM", "HISTORY CLAIM KACAMATA"];

const Plafon = dynamic(() => import("./Plafon"), { ssr: false });
const ReportBenefitClaim = dynamic(() => import("./ReportBenefitClaim"), { ssr: false });
const HistoryClaimKacamata = dynamic(() => import("./HistoryClaimKacamata"), { ssr: false });

const renderContent = (type: string) => {
	if (type === "PLAFON") {
		return <Plafon />;
	} else if (type === "REPORT BENEFIT CLAIM") {
		return <ReportBenefitClaim />;
	} else if (type === "HISTORY CLAIM KACAMATA") {
		return <HistoryClaimKacamata />;
	}
};

export default function BenefitClaim() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Wrapper>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			<WrapperTitle>
				<TitleText>{tabTitle[activeTab]}</TitleText>
			</WrapperTitle>
			{renderContent(tabTitle[activeTab])}
		</Wrapper>
	);
}
