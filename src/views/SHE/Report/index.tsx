import { ISelectItem, Select } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import React, { useState } from "react";
import { useWindowSize } from "utils/functions";
import { fontWeights } from "utils/styles";
import Mobile from "./Mobile";
import SafetyPerformance from "./SafetyPerformance";
import { ArrowDown, SelectContainer, TabsContainer, TabsText } from "./styles";

const selectItems = [
	{ id: 1, values: "Safety Performance", label: "Safety Performance" },
	{ id: 2, values: "Mobile", label: "Mobile" },
];

const tabsData = ["Mobile", "Device", "Safety Performance"];

const renderContent = (type: string) => {
	if (type === "Safety Performance") {
		return <SafetyPerformance />;
	} else if (type === "Mobile") {
		return <Mobile />;
	}
};

export default function Report() {
	const width = useWindowSize();
	const [selectedItem, setSelectedItem] = useState("Mobile");
	const handleSelect = (e: ISelectItem | ISelectItem[]) => {
		setSelectedItem(e.values);
	};
	return (
		<>
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				SHE / Report
			</TitlePage>
			{width.width > 700 ? (
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
			) : (
				<SelectContainer>
					<label>Menu</label>
					<Select
						items={selectItems}
						defaultValue={{ id: 1, values: selectedItem, label: selectedItem }}
						onChange={handleSelect as any}
					/>
					<ArrowDown></ArrowDown>
				</SelectContainer>
			)}
			{renderContent(selectedItem)}
		</>
	);
}
