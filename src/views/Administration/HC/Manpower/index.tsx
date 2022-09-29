import React, { useState } from "react";
import {
	Wrapper,
	TabsWrapper,
	TabText,
	WrapperTitle,
	TitleText,
} from "views/Administration/styles";
import Assessment from "./Assessment";

const tabTitle = [
	"PERSONEL",
	"PERSONEL V.2",
	"AGREEMENT",
	"ASSESSMENT",
	"EMPLOYEE NON-ACTIVE",
	"HISTORY GRADE AND POST",
	"RESET DEVICE",
];

export default function Manpower() {
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
			{activeTab === 3 ? (
				<Assessment />
			) : (
				<WrapperTitle>
					<TitleText>{tabTitle[activeTab]}</TitleText>
				</WrapperTitle>
			)}
		</Wrapper>
	);
}
