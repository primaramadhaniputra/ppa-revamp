import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { TitleText, Wrapper, WrapperTitle } from "views/Administration/styles";

const tabTitle = ["BUILDING", "GUEST", "RESERVASI"];

const BuildingView = dynamic(() => import("./Building"), { ssr: false });
// const GuestView = dynamic(() => import("./Guest"), { ssr: false });
// const ReservasiView = dynamic(() => import("./Reservasi"), { ssr: false });

const renderContent = (type: string) => {
	if (type === "BUILDING") {
		return <BuildingView />;
	}
};

export default function Mess() {
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
