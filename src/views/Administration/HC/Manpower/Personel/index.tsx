import { Grid } from "@hudoro/neron";
import React from "react";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import TableComponent2 from "src/components/organism/TableComp2";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import CompleteArrow from "atoms/CompleteArrow";
import { ThItemContainer, WrapperTable, WrapperTitle } from "../../../styles";
import { IcBarChart, IcEdit } from "atoms/Icon";
import { colors } from "utils/styles";
import FlyingForm from "./FlyingForm";
import StyledButton from "atoms/StyledButton";
import AddEmployee from "./AddEmployee";
import EditForm from "./EditForm";

interface IProps {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
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

export default function Personel() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const [isShowEdit, setIsShowEdit] = React.useState(false);
	const [formEditPosition, setformEditPosition] = React.useState(0);

	const [isShowAddEmployee, setIsShowAddEmployee] = React.useState(false);
	const [formAddEmployeePosition, setFormAddEmployeePosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const handleShowEdit = (target: { pageY: number; clientY: number }) => {
		setIsShowEdit(true);
		setformEditPosition(target.pageY - target.clientY);
	};

	const handleShowAddEmployee = (target: { pageY: number; clientY: number }) => {
		setIsShowAddEmployee(true);
		setFormAddEmployeePosition(target.pageY - target.clientY);
	};

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) =>
				info.column.id === "Action" ? (
					<IcEdit width={16} color={colors.blue} cursor="pointer" onClick={handleShowEdit} />
				) : (
					info.getValue()
				),
			header: () => (
				<ThItemContainer key={index} style={{ minWidth: "100px" }}>
					<Grid>
						<span>{item}</span>
					</Grid>
					<CompleteArrow />
				</ThItemContainer>
			),
		};
	});
	const table = useReactTable({
		data: defaultDataTable,
		columns,
		state: {
			sorting,
			rowSelection,
			globalFilter,
		},
		onSortingChange: setSorting,
		onRowSelectionChange: setRowSelection,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		debugTable: true,
		getSortedRowModel: getSortedRowModel(),
	});

	const handleChangeTotalShowData = (e: { target: { value: number } }) => {
		table.setPageSize(e.target.value);
	};

	return (
		<>
			<FlyingForm
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
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
				<StyledButton
					style={{
						maxWidth: "max-content",
					}}
					onClick={handleShowAddEmployee}
				>
					ADD EMPLOYEE
				</StyledButton>
				<StyledButton
					style={{
						maxWidth: "max-content",
						display: "flex",
						alignItems: "center",
						gap: 5,
					}}
					onClick={handleShowDetail}
				>
					<IcBarChart width={20} /> <span>Ach.Data 99.8 %</span>
				</StyledButton>
			</WrapperTitle>
			<WrapperTable>
				<TableFilterSearch
					table={table}
					handleChangeTotalShowData={handleChangeTotalShowData}
					globalFilter={globalFilter}
					setGlobalFilter={setGlobalFilter}
					withButton={true}
					buttonTitle="EXPORT"
				/>
				<TableComponent2 table={table} />
			</WrapperTable>
		</>
	);
}
