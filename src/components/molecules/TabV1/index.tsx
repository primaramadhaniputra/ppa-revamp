import React from "react";
import { fontWeights } from "utils/styles";
import { TabsContainer, TabsText } from "./styles";

interface IProps {
	tabsData: string[];
	selectedItem: string;
	setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
}

export default function TabV1({ tabsData, selectedItem, setSelectedItem }: IProps) {
	return (
		<TabsContainer>
			{tabsData.map((item, index) => (
				<TabsText
					style={{
						backgroundColor: selectedItem === item ? "white" : "",
						fontWeight: selectedItem === item ? fontWeights.extraBold : fontWeights.regular,
					}}
					key={index}
					onClick={() => setSelectedItem(item)}
				>
					{item}
				</TabsText>
			))}
		</TabsContainer>
	);
}
