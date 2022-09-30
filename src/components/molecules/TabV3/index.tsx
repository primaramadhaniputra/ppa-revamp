import React from "react";
import { TabContainer, TabText } from "./styles";

interface IProps {
	tabsData: string[];
	activeTab: number;
	setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

export default function TabV3({ tabsData, activeTab, setActiveTab }: IProps) {
	const handleActiveTab = (index: number) => {
		setActiveTab(index);
	};

	return (
		<TabContainer>
			{tabsData.map((item, index) => (
				<TabText
					key={index}
					activeTab={activeTab === index && true}
					onClick={() => handleActiveTab(index)}
				>
					{item}
				</TabText>
			))}
		</TabContainer>
	);
}
