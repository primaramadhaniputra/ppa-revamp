import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { TitleText, Wrapper, WrapperTable, WrapperTitle } from "../styles";

const Table = dynamic(() => import("./Table"), {
	ssr: false,
});
const Question = dynamic(() => import("./Question"), {
	ssr: false,
});
const Schedule = dynamic(() => import("./Schedule"), {
	ssr: false,
});

const tabTitle = ["Subject", "Question", "Schedule"];

const renderContent = (activeTab: number) => {
	if (activeTab === 0) {
		return <Table />;
	} else if (activeTab === 1) {
		return <Question />;
	} else {
		return <Schedule />;
	}
};

export default function Quiz() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Wrapper>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			<WrapperTitle style={{ margin: "20px 0" }}>
				<TitleText>{tabTitle[activeTab]}</TitleText>
			</WrapperTitle>
			<WrapperTable>{renderContent(activeTab)}</WrapperTable>
		</Wrapper>
	);
}
