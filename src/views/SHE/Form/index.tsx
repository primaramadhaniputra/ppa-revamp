import { ISelectItem, Select } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import React, { useState } from "react";
import { useWindowSize } from "utils/functions";
import { fontWeights } from "utils/styles";
import Komorbid from "./Komorbid";
import Licence from "./Licence";
import Quiz from "./Quiz";
import SapPlan from "./SapPlan";
import { SelectContainer, TabsContainer, TabsText } from "./styles";

const selectItems = [
	{ id: 0, values: "Quiz", label: "Quiz" },
	{ id: 1, values: "SAP Plan", label: "SAP Plan" },
	{ id: 2, values: "Licence", label: "Licence" },
	{ id: 3, values: "Komorbid", label: "Komorbid" },
];

const renderContent = (type: string) => {
	if (type === "Quiz") {
		return <Quiz />;
	} else if (type === "SAP Plan") {
		return <SapPlan />;
	} else if (type === "Licence") {
		return <Licence />;
	} else if (type === "Komorbid") {
		return <Komorbid />;
	}
};

const tabsData = ["Quiz", "Licence", "Komorbid", "SAP Plan", "Insiden", "Set Wake Up Call"];

export default function Form() {
	const width = useWindowSize();
	const [selectedItem, setSelectedItem] = useState("Quiz");
	const handleSelect = (e: ISelectItem | ISelectItem[]) => {
		setSelectedItem(e.values);
	};
	return (
		<>
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				SHE / Form
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
				</SelectContainer>
			)}
			{renderContent(selectedItem)}
		</>
	);
}
