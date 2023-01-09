import { ISelectItem, Select } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import TabV1 from "molecules/TabV1";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useWindowSize } from "utils/functions";
import { SelectContainer } from "./styles";
import FlightTicketView from "./FlightTicket";
import STView from "./ST";
import MessView from "./Mess";

const TravelView = dynamic(() => import("./Travel"), { ssr: false });
const PackMealsView = dynamic(() => import("./PackMeals"), { ssr: false });

const selectItems = [
	{ id: 1, values: "FLIGHT TICKET", label: "FLIGHT TICKET" },
	{ id: 2, values: "TRAVEL", label: "TRAVEL" },
	{ id: 3, values: "ST", label: "ST" },
	{ id: 4, values: "PACK MEALS", label: "PACK MEALS" },
	{ id: 5, values: "MESS", label: "MESS" },
];

const tabsData = ["FLIGHT TICKET", "TRAVEL", "ST", "PACK MEALS", "MESS"];

export const renderContent = (type: string) => {
	if (type === "FLIGHT TICKET") {
		return <FlightTicketView />;
	} else if (type === "TRAVEL") {
		return <TravelView />;
	} else if (type === "ST") {
		return <STView />;
	} else if (type === "PACK MEALS") {
		return <PackMealsView />;
	} else if (type === "MESS") {
		return <MessView />;
	}
};

export default function GA() {
	const width = useWindowSize();
	const [selectedItem, setSelectedItem] = useState("FLIGHT TICKET");
	const handleSelect = (e: ISelectItem | ISelectItem[]) => {
		setSelectedItem(e.values);
	};

	return (
		<>
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				Administration / GA
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
