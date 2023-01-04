import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { WrapperTitle } from "../../../styles";
import { IcBarChart, IcEdit } from "atoms/Icon";
import { colors } from "utils/styles";
import FlyingForm from "./FlyingForm";
import StyledButton from "atoms/StyledButton";
import AddEmployee from "./AddEmployee";
import EditForm from "./EditForm";
import IncomingEmployee from "./IncomingEmployee";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["NRP"]: "",
		["Nama"]: "",
		["Perusahaan"]: "",
		["Dept"]: "",
		["Jabatan"]: "",
		["Posisi"]: "",
		["Achievement"]: "",
		["Action"]: "",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function Personel() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const [isShowEdit, setIsShowEdit] = React.useState(false);
	const [formEditPosition, setformEditPosition] = React.useState(0);

	const [isShowIncomingEmployee, setIsShowIncomingEmployee] = React.useState(false);
	const [formIncomingEmployeePosition, setformIncomingEmployeePosition] = React.useState(0);

	const [isShowAddEmployee, setIsShowAddEmployee] = React.useState(false);
	const [formAddEmployeePosition, setFormAddEmployeePosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const handleShowIncomingEmployee = (target: { pageY: number; clientY: number }) => {
		setIsShowIncomingEmployee(true);
		setformIncomingEmployeePosition(target.pageY - target.clientY);
	};

	const handleShowEdit = (target: { pageY: number; clientY: number }) => {
		setIsShowEdit(true);
		setformEditPosition(target.pageY - target.clientY);
	};

	const handleShowAddEmployee = (target: { pageY: number; clientY: number }) => {
		setIsShowAddEmployee(true);
		setFormAddEmployeePosition(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) =>
				info.column.id === "Action" ? (
					<IcEdit width={16} color={colors.blue} cursor="pointer" onClick={handleShowEdit} />
				) : (
					info.getValue()
				),
			footer: (info) => info.column.id,
		}),
	);

	return (
		<>
			<FlyingForm
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<IncomingEmployee
				isShowDetail={isShowIncomingEmployee}
				setIsShowDetail={setIsShowIncomingEmployee}
				formPosition={formIncomingEmployeePosition}
			/>
			<AddEmployee
				isShowAddEmployee={isShowAddEmployee}
				setIsShowAddEmployee={setIsShowAddEmployee}
				formAddEmployeePosition={formAddEmployeePosition}
			/>
			<EditForm
				isShowEdit={isShowEdit}
				setIsShowEdit={setIsShowEdit}
				formEditPosition={formEditPosition}
			/>
			<WrapperTitle
				style={{
					margin: "0",
					backgroundColor: "white",
					padding: "10px",
					borderBottom: "2px solid rgba(0,0,0,.25)",
				}}
			>
				<Grid container gap={10}>
					<Grid style={{ minWidth: "150px" }}>
						<StyledButton onClick={handleShowAddEmployee}>ADD EMPLOYEE</StyledButton>
					</Grid>
					<Grid style={{ minWidth: "200px" }}>
						<StyledButton
							onClick={handleShowIncomingEmployee}
							style={{ backgroundColor: "#D81B60" }}
						>
							Incoming Employee (1)
						</StyledButton>
					</Grid>
				</Grid>
				<Grid container>
					<StyledButton
						style={{
							display: "flex",
							alignItems: "center",
							gap: 5,
						}}
						onClick={handleShowDetail}
					>
						<IcBarChart width={20} /> <span>Ach.Data 99.8 %</span>
					</StyledButton>
				</Grid>
			</WrapperTitle>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
