import React, { useState } from "react";
import {
	Wrapper,
	TabsWrapper,
	TabText,
	WrapperTitle,
	TitleText,
} from "views/Administration/styles";

const tabTitle = ["WAITING TO CONFIRM", "LEAVING REPORT", "SALDO CUTI", "MONITORING"];

export default function LeavingApplication() {
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
