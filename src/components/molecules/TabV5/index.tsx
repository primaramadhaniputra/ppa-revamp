import React from "react";
import { fontWeights } from "utils/styles";
import { TabsContainer, TabsText, TextWrapper } from "./styles";

interface IProps {
	tabsData: string[];
	selectedItem: string;
	setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
}

export default function TabV5({ tabsData, selectedItem, setSelectedItem }: IProps) {
	return (
		<TabsContainer>
			{tabsData.map((item, index) => (
				<TextWrapper
					style={{
						backgroundColor: selectedItem === item ? "white" : "",
						fontWeight: selectedItem === item ? fontWeights.extraBold : fontWeights.regular,
						boxShadow:
							selectedItem === item ? "0 0 25px rgba(0,0,0,.2)" : "0 0 25px rgba(0,0,0,.05)",
					}}
					onClick={() => setSelectedItem(item)}
				>
					<TabsText key={index}>{item}</TabsText>
				</TextWrapper>
			))}
		</TabsContainer>
	);
}
