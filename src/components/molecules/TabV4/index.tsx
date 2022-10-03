import React from "react";
import { TabsContainer, TabText } from "./styles";

interface IProps {
	tabText: string[];
	activeTab: number;
	setActiveTab: (value: React.SetStateAction<number>) => void;
}

export default function TabV4({ tabText, activeTab, setActiveTab }: IProps) {
	const handleActiveTab = (index: number) => {
		setActiveTab(index);
	};

	return (
		<TabsContainer>
			{tabText.map((item, index) => (
				<TabText
					key={index}
					activeTab={activeTab === index && true}
					onClick={() => handleActiveTab(index)}
				>
					{item}
				</TabText>
			))}
		</TabsContainer>
	);
}
