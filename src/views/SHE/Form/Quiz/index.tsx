import { Text } from "@hudoro/neron";
import React, { useState } from "react";
import { fontWeights } from "utils/styles";
import Question from "./Question";
import Schedule from "./Schedule";
import { TabsWrapper, TabText, Wrapper, WrapperTable, WrapperTitle } from "./styles";
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

	const handleActiveTab = (index: number) => {
		setActiveTab(index);
	};
	return (
		<Wrapper>
			<TabsWrapper>
				{tabTitle.map((item, index) => (
					<TabText
						key={index}
						activeTab={activeTab === index ? true : false}
						onClick={() => handleActiveTab(index)}
					>
						{item}
					</TabText>
				))}
			</TabsWrapper>
			<WrapperTitle>
				<Text variant="h3" style={{ fontWeight: fontWeights.bold, fontSize: "22px" }}>
					{tabTitle[activeTab]}
				</Text>
			</WrapperTitle>
			<WrapperTable>{renderContent(activeTab)}</WrapperTable>
		</Wrapper>
	);
}
