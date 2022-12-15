import { ISelectItem, Select } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import TabV1 from "molecules/TabV1";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useWindowSize } from "utils/functions";
import { SelectContainer } from "./styles";

const Insiden = dynamic(() => import("./Insiden"), { ssr: false });
const Komorbid = dynamic(() => import("./Komorbid"), { ssr: false });
const Quiz = dynamic(() => import("./Quiz"), { ssr: false });
const Licence = dynamic(() => import("./Licence"), { ssr: false });
const SapPlan = dynamic(() => import("./SapPlan"), { ssr: false });
const SetWakeUpCall = dynamic(() => import("./SetWakeUpCall"), { ssr: false });

const selectItems = [
	{ id: 0, values: "Quiz", label: "Quiz" },
	{ id: 1, values: "SAP Plan", label: "SAP Plan" },
	{ id: 2, values: "Licence", label: "Licence" },
	{ id: 3, values: "Komorbid", label: "Komorbid" },
	{ id: 4, values: "Insiden", label: "Insiden" },
	{ id: 5, values: "Set Wake Up Call", label: "Set Wake Up Call" },
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
	} else if (type === "Insiden") {
		return <Insiden />;
	} else if (type === "Set Wake Up Call") {
		return <SetWakeUpCall />;
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
