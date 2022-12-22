import React from "react";
import { Box, BoxContainer, StatusText, TableTitle, WrapperStatus } from "./styles";
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
import DateText from "atoms/DateText";
import TitleText from "atoms/TitleText";
import LayoutTable from "src/components/layouts/LayoutTable";
import { Grid } from "@hudoro/neron";

interface Person {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Date"]: "-",
		["#"]: "-",
		["in"]: "-",
		["Out"]: "-",
		["Job"]: "-",
	};
});

export default function SelfAttendance() {
	const [rowSelection, setRowSelection] = React.useState({});
	// const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const columns: ColumnDef<Person>[] = [
		{
			accessorKey: "Date",
			cell: (info) => info.getValue(),
			header: () => <span>Date</span>,
		},
		{
			accessorKey: "#",
			cell: (info) => info.getValue(),
			header: () => <span></span>,
		},
		{
			header: "Check",
			footer: (props) => props.column.id,
			columns: [
				{
					accessorKey: "in",
					cell: (info) => info.getValue(),
					header: () => <span>In</span>,
				},
				{
					accessorKey: "Out",
					cell: (info) => info.getValue(),
					header: () => <span>Out</span>,
				},
			],
		},
		{
			accessorKey: "Job",
			cell: (info) => info.getValue(),
			header: () => <span>Job</span>,
		},
	];

	const table = useReactTable({
		data: defaultDataTable,
		columns,
		state: {
			sorting,
			rowSelection,
			// globalFilter,
		},
		onSortingChange: setSorting,
		onRowSelectionChange: setRowSelection,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		debugTable: true,
		getSortedRowModel: getSortedRowModel(),
	});
	return (
		<>
			<LayoutTable style={{ marginTop: "10px" }}>
				<Grid container alignItems="center" justifyContent="space-between">
					<TitleText>Self Attendance</TitleText>
					<DateText />
				</Grid>
			</LayoutTable>
			<LayoutTable>
				<TableTitle variant="h4">Self Attendance</TableTitle>
				<TableComponent2 table={table} noPagination={true} />
				<WrapperStatus>
					<BoxContainer>
						<StatusText>On Going</StatusText>
						<Box style={{ backgroundColor: "#EFE44C" }}></Box>
					</BoxContainer>
					<BoxContainer>
						<StatusText>Ok</StatusText>
						<Box style={{ backgroundColor: "#25B78A" }}></Box>
					</BoxContainer>
					<BoxContainer>
						<StatusText>Rejected</StatusText>
						<Box style={{ backgroundColor: "#FF0008" }}></Box>
					</BoxContainer>
				</WrapperStatus>
			</LayoutTable>
		</>
	);
}
