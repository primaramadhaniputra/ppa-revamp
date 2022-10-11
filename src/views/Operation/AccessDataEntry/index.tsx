import { ISelectItem, Select } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import TabV1 from "molecules/TabV1";
import React, { useState } from "react";
import { useWindowSize } from "utils/functions";
import Academy from "./Academy";
import BaseControl from "./BaseControl";
import Moco from "./Moco";

import { ArrowDown, SelectContainer } from "./styles";

const tabsData = [
	"Academy",
	"Refueling Access",
	"Checker Access",
	"Push Check Out",
	"Monitoring Unit Operasi",
	"Refuel Version",
	"Fuel Rate",
	"Moco",
	"Base Control",
	"Grease,Oil & Coolan",
	"Fuel Station",
	"Operasional Plan",
];

const selectItems = [
	{ id: 1, values: "Academy", label: "Academy" },
	{ id: 2, values: "Refueling Access", label: "Refueling Access" },
	{ id: 3, values: "Checker Access", label: "Checker Access" },
	{ id: 4, values: "Push Check Out", label: "Push Check Out" },
	{ id: 5, values: "Monitoring Unit Operasi", label: "Monitoring Unit Operasi" },
	{ id: 6, values: "Refuel Version", label: "Refuel Version" },
	{ id: 7, values: "Fuel Rate", label: "Fuel Rate" },
	{ id: 8, values: "Moco", label: "Moco" },
	{ id: 9, values: "Base Control", label: "Base Control" },
	{ id: 10, values: "Grease,Oil & Coolan", label: "Grease,Oil & Coolan" },
	{ id: 11, values: "Fuel Station", label: "Fuel Station" },
	{ id: 12, values: "Operasional Plan", label: "Operasional Plan" },
];

function renderContent(queryName: string) {
	if (queryName === "Academy") {
		return <Academy />;
	} else if (queryName === "Moco") {
		return <Moco />;
	} else if (queryName === "Base Control") {
		return <BaseControl />;
	}
}

export default function Operation() {
	const width = useWindowSize();
	const [selectedItem, setSelectedItem] = useState("Academy");
	const handleSelect = (e: ISelectItem | ISelectItem[]) => {
		setSelectedItem(e.values);
	};

	return (
		<>
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				Operation / Access Data Entry
			</TitlePage>
			{width.width > 900 ? (
				<TabV1 tabsData={tabsData} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
			) : (
				<SelectContainer style={{ margin: "15px 0" }}>
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