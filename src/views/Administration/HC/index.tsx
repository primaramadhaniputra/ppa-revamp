import { ISelectItem, Select } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import React, { useState } from "react";
import { useWindowSize } from "utils/functions";
import { fontWeights } from "utils/styles";
import BenefitClaim from "./BenefitClaim";
import Grade from "./Grade";
import LeavingApplication from "./LeavingApplication";
import Manpower from "./Manpower";
import { SelectContainer, TabsContainer, TabsText } from "./styles";
import SuratPerintahLembur from "./SuratPerintahLembur";
import TimeManagement from "./TimeManagement";

const selectItems = [
	{ id: 1, values: "MANPOWER", label: "MANPOWER" },
	{ id: 2, values: "LEAVING APPLICATION", label: "LEAVING APPLICATION" },
	{ id: 3, values: "TIME MANAGEMENT", label: "TIME MANAGEMENT" },
	{ id: 4, values: "BENEFIT CLAIM", label: "BENEFIT CLAIM" },
	{ id: 5, values: "GRADE", label: "GRADE" },
	{ id: 6, values: "SURAT PERINTAH LEMBUR", label: "SURAT PERINTAH LEMBUR" },
];

const tabsData = [
	"MANPOWER",
	"LEAVING APPLICATION",
	"TIME MANAGEMENT",
	"BENEFIT CLAIM",
	"GRADE",
	"SURAT PERINTAH LEMBUR",
];

const renderContent = (type: string) => {
	if (type === "MANPOWER") {
		return <Manpower />;
	} else if (type === "LEAVING APPLICATION") {
		return <LeavingApplication />;
	} else if (type === "TIME MANAGEMENT") {
		return <TimeManagement />;
	} else if (type === "BENEFIT CLAIM") {
		return <BenefitClaim />;
	} else if (type === "GRADE") {
		return <Grade />;
	} else {
		return <SuratPerintahLembur />;
	}
};

export default function Report() {
	const width = useWindowSize();
	const [selectedItem, setSelectedItem] = useState("MANPOWER");
	const handleSelect = (e: ISelectItem | ISelectItem[]) => {
		setSelectedItem(e.values);
	};
	return (
		<>
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				Administration / HC
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
