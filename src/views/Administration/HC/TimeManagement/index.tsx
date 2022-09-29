import React, { useState } from "react";
import {
	TitleText,
	WrapperTitle,
	TabsWrapper,
	Wrapper,
	TabText,
} from "views/Administration/styles";

const tabTitle = [
	"HOLIDAY",
	"ATTENDANCE INDEX",
	"ATTENDANCE INDEX(BETA)",
	"PERMI INDEX",
	"INDIVIDUAL INDEX",
	"PREMI",
	"OVERTIME",
	"DAR",
];

export default function TimeManagement() {
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
