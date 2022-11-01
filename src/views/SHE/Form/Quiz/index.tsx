import TitleText from "atoms/TitleText";
import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import LayoutTable from "src/components/layouts/LayoutTable";

const Table = dynamic(() => import("./Table"));
const Question = dynamic(() => import("./Question"));
const Schedule = dynamic(() => import("./Schedule"));

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
		<>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			<LayoutTable>
				<TitleText> {tabTitle[activeTab]}</TitleText>
			</LayoutTable>
			<LayoutTable>{renderContent(activeTab)}</LayoutTable>
		</>
	);
}
