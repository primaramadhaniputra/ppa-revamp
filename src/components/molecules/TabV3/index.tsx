import React from "react";
import { TabContainer, TabText } from "./styles";

interface IProps {
	tabsData: string[];
	activeTab: number;
	setActiveTab: React.Dispatch<React.SetStateAction<number>>;
	containerStyles?: React.CSSProperties;
	activeColor?: string;
}

export default function TabV3({
	tabsData,
	activeTab,
	setActiveTab,
	containerStyles,
	activeColor,
}: IProps) {
	const handleActiveTab = (index: number) => {
		setActiveTab(index);
	};

	return (
		<TabContainer style={containerStyles}>
			{tabsData.map((item, index) => (
				<TabText
					key={index}
					activeTab={activeTab === index && true}
					onClick={() => handleActiveTab(index)}
					activeColor={activeColor}
				>
					{item}
				</TabText>
			))}
		</TabContainer>
	);
}
