import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { TitleText, Wrapper, WrapperTitle } from "views/Administration/styles";

const Ticket = dynamic(() => import("./Ticket"), {
	ssr: false,
});
const ReportTicket = dynamic(() => import("./ReportTicket"), {
	ssr: false,
});

const tabTitle = ["TICKET", "REPORT TICKET"];

const renderContent = (type: string) => {
	if (type === "TICKET") {
		return <Ticket />;
	} else {
		return <ReportTicket />;
	}
};

export default function FlightTicket() {
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
