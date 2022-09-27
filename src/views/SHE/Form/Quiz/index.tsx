import React, { useState } from "react";
import { TitleText, Wrapper, WrapperTable, WrapperTitle } from "../styles";
import Question from "./Question";
import Schedule from "./Schedule";
import { TabsWrapper, TabText } from "./styles";
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
			<WrapperTitle style={{ margin: "20px 0" }}>
				<TitleText>{tabTitle[activeTab]}</TitleText>
			</WrapperTitle>
			<WrapperTable>{renderContent(activeTab)}</WrapperTable>
		</Wrapper>
	);
}
