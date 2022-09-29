import React, { useState } from "react";
import {
	Wrapper,
	TabsWrapper,
	TabText,
	WrapperTitle,
	TitleText,
} from "views/Administration/styles";

const tabTitle = ["PLAFON", "REPORT BENEFIT CLAIM", "HISTORY CLAIM KACAMATA"];

export default function BenefitClaim() {
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
