import { Select } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import TabV1 from "molecules/TabV1";
import React, { useState } from "react";
import { useWindowSize } from "utils/functions";
import AttendanceDetail from "./AttendanceDetail";
import AttendanceRatio from "./AttendanceRatio";
import Induksi from "./Induksi";
import Izin from "./Izin";
import OperatorHours from "./OperatorHours";
import RankingOperator from "./RankingOperator";
import SelfAttendance from "./SelftAttendance";
import { ArrowDown, SelectContainer } from "./styles";
import SuratPelanggaran from "./SuratPelanggaran";
import TurnOver from "./TurnOver";

const selectItems = [
	{ id: 1, values: "Attendance Ratio", label: "Attendance Ratio" },
	{ id: 2, values: "Attendance Detail", label: "Attendance Detail" },
	{ id: 3, values: "Surat Pelanggaran", label: "Surat Pelanggaran" },
	{ id: 4, values: "Operator Hours", label: "Operator Hours" },
	{ id: 5, values: "Induksi", label: "Induksi" },
	{ id: 6, values: "Izin", label: "Izin" },
	{ id: 7, values: "Turn Over", label: "Turn Over" },
	{ id: 8, values: "Self Attendance", label: "Self Attendance" },
];

const tabsData = [
	"Self Attendance",
	"Attendance Ratio",
	"Attendance Detail",
	"Surat Pelanggaran",
	"Operator Hours",
	"Ranking Operator",
	"Induksi",
	"Izin",
	"Turn Over",
];

const renderContent = (type: string) => {
	if (type === "Attendance Ratio") {
		return <AttendanceRatio />;
	} else if (type === "Attendance Detail") {
		return <AttendanceDetail />;
	} else if (type === "Surat Pelanggaran") {
		return <SuratPelanggaran />;
	} else if (type === "Operator Hours") {
		return <OperatorHours />;
	} else if (type === "Induksi") {
		return <Induksi />;
	} else if (type === "Izin") {
		return <Izin />;
	} else if (type === "Turn Over") {
		return <TurnOver />;
	} else if (type === "Self Attendance") {
		return <SelfAttendance />;
	} else if (type === "Ranking Operator") {
		return <RankingOperator />;
	}
};

export default function Form() {
	const width = useWindowSize();
	const [selectedItem, setSelectedItem] = useState("Self Attendance");
	const handleSelect = (e: { values: string }) => {
		setSelectedItem(e.values);
	};

	return (
		<>
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				Team Work / Report
			</TitlePage>
			{width.width > 900 ? (
				<TabV1 tabsData={tabsData} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
			) : (
				<SelectContainer>
					<label>Menu</label>
					<Select
						items={selectItems}
						defaultValue={{
							id: 1,
							values: "Self Attendance",
							label: "Self Attendance",
						}}
						onChange={handleSelect as any}
					/>
					<ArrowDown></ArrowDown>
				</SelectContainer>
			)}
			{renderContent(selectedItem)}
		</>
	);
}
