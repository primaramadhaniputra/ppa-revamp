import { ISelectItem, Select } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import TabV1 from "molecules/TabV1";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useWindowSize } from "utils/functions";
import { SelectContainer } from "./styles";

const Device = dynamic(() => import("./Device"), {
	ssr: false,
});
const SafetyPerformance = dynamic(() => import("./SafetyPerformance"), {
	ssr: false,
});
const Mobile = dynamic(() => import("./Mobile"), {
	ssr: false,
});

const selectItems = [
	{ id: 1, values: "Safety Performance", label: "Safety Performance" },
	{ id: 2, values: "Mobile", label: "Mobile" },
	{ id: 3, values: "Device", label: "Device" },
];

const tabsData = ["Mobile", "Device", "Safety Performance"];

const renderContent = (type: string) => {
	if (type === "Safety Performance") {
		return <SafetyPerformance />;
	} else if (type === "Mobile") {
		return <Mobile />;
	} else if (type === "Device") {
		return <Device />;
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
				<TabV1 tabsData={tabsData} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
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
