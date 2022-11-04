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
import { THContainer } from "../styles";
import CompleteArrow from "atoms/CompleteArrow";
import LayoutTable from "src/components/layouts/LayoutTable";
import { Grid } from "@hudoro/neron";
import TitleText from "atoms/TitleText";
import ButtonFile from "atoms/ButtonFile";
import Table from "./Table";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = [
	{
		Date: "HD787",
		Filename: "Hd123",
		MP: `33`,
		Day: "2022-17-08",
		Status: "2022-17-08",
		Remark: "2022-17-08 02:12:12",
	},
];

export default function UploadRoster() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const columns: ColumnDef<Person>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => info.getValue(),
			header: (info) => {
				return (
					<THContainer key={index}>
						<span>{item}</span>
						{info.header.id !== "remark" && <CompleteArrow />}
					</THContainer>
				);
			},
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
			<LayoutTable style={{ marginTop: "10px" }}>
				<Grid container alignItems="center" justifyContent="space-between">
					<TitleText>Upload Roster</TitleText>
					<ButtonFile title="UPLOAD FILE" />
				</Grid>
			</LayoutTable>
			<LayoutTable>
				<Table />
			</LayoutTable>
			<LayoutTable>
				<TableFilterSearch
					table={table}
					handleChangeTotalShowData={handleChangeTotalShowData}
					globalFilter={globalFilter}
					setGlobalFilter={setGlobalFilter}
					withButton={false}
					buttonTitle="EXPORT"
				/>
				<TableComponent2 table={table} />
			</LayoutTable>
		</>
	);
}
