import React from "react";
import { TableHeader } from "../styles";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import { fontWeights } from "utils/styles";
import TableComponent2 from "src/components/organism/TableComp2";
import { fontFamilies } from "@hudoro/neron";
import { WrapperTable } from "../../styles";

interface Person {
	[x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Description"]: "Karna tauran",
		["Sebelumnya"]: "Kena senggol jadi lansung bacok",
		["JAN"]: "0",
		["FEB"]: "0",
		["MAR"]: "0",
		["APR"]: "0",
		["MEI"]: "0",
		["JUN"]: "0",
		["JUL"]: "0",
		["AGU"]: "0",
		["SEP"]: "0",
		["OKT"]: "0",
		["NOV"]: "0",
		["DES"]: "0",
		["YTD"]: "0",
	};
});

export default function Insiden() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	// const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const columns: ColumnDef<Person>[] = objTitle.map((item) => {
		return {
			accessorKey: item,
			cell: (info) => info.getValue(),
			header: () => <span>{item}</span>,
			footer: (data) => {
				return (
					<span
						style={{
							fontWeight: fontWeights.bold,
							fontFamily: fontFamilies.poppins,
						}}
					>
						{data.header.id === "Description" ? "TOTAL" : 0}
					</span>
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
		<WrapperTable>
			<TableHeader>Insiden</TableHeader>
			<TableComponent2 table={table} noPagination={true} withFooter={true} />
		</WrapperTable>
	);
}
