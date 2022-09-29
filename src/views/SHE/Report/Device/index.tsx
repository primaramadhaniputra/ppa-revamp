import React, { useState } from "react";
import { TabsWrapper, TabText, TitleText, Wrapper, WrapperTitle } from "./styles";

const tabTitle = [
	"Road Tracking",
	"Fatigue Monitor",
	"Fleet Monitoring",
	"Speed",
	"Dump Control",
	"Enviro",
];

export default function Device() {
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
				<TitleText>{tabTitle[activeTab]}</TitleText>
			</WrapperTitle>
		</Wrapper>
	);
}
