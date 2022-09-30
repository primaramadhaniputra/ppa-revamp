import TabV2 from "molecules/TabV2";
import React, { useState } from "react";
import { TitleText, Wrapper, WrapperTable, WrapperTitle } from "../styles";
import Question from "./Question";
import Schedule from "./Schedule";
import Table from "./Table";

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
