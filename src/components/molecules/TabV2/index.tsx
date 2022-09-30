import React from "react";
import { TabsWrapper, TabText } from "./styles";

interface IProps {
	tabsData: string[];
	activeTab: number;
	setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

export default function TabV2({ tabsData, activeTab, setActiveTab }: IProps) {
	const handleActiveTab = (index: number) => {
		setActiveTab(index);
	};
	return (
		<TabsWrapper>
			{tabsData.map((item, index) => (
				<TabText
					key={index}
					activeTab={activeTab === index && true}
					onClick={() => handleActiveTab(index)}
				>
					{item}
				</TabText>
			))}
		</TabsWrapper>
	);
}
