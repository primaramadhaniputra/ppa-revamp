import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { TitleText, Wrapper, WrapperTitle } from "views/Administration/styles";

const tabTitle = ["IN", "OUT"];

const In = dynamic(() => import("./In"), { ssr: false });
const Out = dynamic(() => import("./Out"), { ssr: false });

const renderContent = (type: string) => {
	if (type === "IN") {
		return <In />;
	} else if (type === "OUT") {
		return <Out />;
	}
};

export default function ST() {
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
