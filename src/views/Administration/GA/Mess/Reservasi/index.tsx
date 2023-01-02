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
import { ThItemContainer, WrapperTable } from "../../../styles";
import { colors } from "utils/styles";
import DataPenghuniMess from "./DataPenghuniMess";
import DataKamarTersedia from "./DataKamarTersedia";

interface IProps {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Building"]: "",
		["Total Rooms"]: "",
		["Guest Capacity"]: "",
		["Guest"]: "0",
		["Available Bed"]: "0",
	};
});

export default function Reservasi() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [isShowDetailByTable, setIsShowDetailByTable] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const [isShowRoomAvailable, setIsShowRoomAvailable] = React.useState(false);
	const [formRoomAvailablePosition, setformRoomAvailablePosition] = React.useState(0);

	const handleShowDetailByTable = (target: { pageY: number; clientY: number }) => {
		setIsShowDetailByTable(true);
		setformPosition(target.pageY - target.clientY);
	};

	const handleShowRoomAvailble = (target: { pageY: number; clientY: number }) => {
		setIsShowRoomAvailable(true);
		setformRoomAvailablePosition(target.pageY - target.clientY);
	};

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) =>
				info.column.id === "Guest" || info.column.id === "Available Bed" ? (
					<span
						style={{ color: colors.primary, cursor: "pointer" }}
						onClick={info.column.id === "Guest" ? handleShowDetailByTable : handleShowRoomAvailble}
					>
						{`${info.getValue()}`}
					</span>
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
			<DataPenghuniMess
				isShowDetail={isShowDetailByTable}
				setIsShowDetail={setIsShowDetailByTable}
				formPosition={formPosition}
			/>
			<DataKamarTersedia
				isShowDetail={isShowRoomAvailable}
				setIsShowDetail={setIsShowRoomAvailable}
				formPosition={formRoomAvailablePosition}
			/>
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
