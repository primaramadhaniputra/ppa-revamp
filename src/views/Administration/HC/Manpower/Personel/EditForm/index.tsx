import { Grid, ISelectItem, Select } from "@hudoro/neron";
import React, { useState } from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import Benefit from "./Benefit";
import EmployeeMutation from "./EmployeeMutation";
import Family from "./Family";
import PayrollData from "./PayrollData";
import PersonalData from "./PersonalData";

interface IProps {
	isShowEdit: boolean;
	setIsShowEdit: React.Dispatch<React.SetStateAction<boolean>>;
	formEditPosition: number;
}

const items = [
	{
		id: "0",
		label: "Personal Data",
		values: "Personal Data",
	},
	{
		id: "1",
		label: "Payroll Data",
		values: "Payroll Data",
	},
	{
		id: "2",
		label: "Employee Mutation",
		values: "Employee Mutation",
	},
	{
		id: "3",
		label: "Benefit",
		values: "Benefit",
	},
	{
		id: "4",
		label: "Family",
		values: "Family",
	},
	{
		id: "5",
		label: "Document",
		values: "Document",
	},
];

const renderContent = (type: string) => {
	if (type === "Personal Data") {
		return <PersonalData />;
	} else if (type === "Payroll Data") {
		return <PayrollData />;
	} else if (type === "Employee Mutation") {
		return <EmployeeMutation />;
	} else if (type === "Benefit") {
		return <Benefit />;
	} else if (type === "Family") {
		return <Family />;
	}
};

export default function EditForm({ isShowEdit, setIsShowEdit, formEditPosition }: IProps) {
	const [activeTab, setactiveTab] = useState("Personal Data");

	const handleChangeActiveTab = (e: ISelectItem | ISelectItem[] | null) => {
		setactiveTab(e?.values);
	};

	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowEdit}
				setIsShowDetail={setIsShowEdit}
				formPosition={formEditPosition}
				title="4010032 - A DHOVID SHYOBRI"
			>
				<Grid style={{ maxWidth: "250px", margin: "auto" }}>
					<Select items={items} defaultValue={items[0]} onChange={handleChangeActiveTab} />
				</Grid>
				<form style={{ marginTop: "30px" }}>{renderContent(activeTab)}</form>
			</LayoutOverlayData>
		</>
	);
}
