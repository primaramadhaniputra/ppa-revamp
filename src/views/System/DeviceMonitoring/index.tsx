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
import { Container } from "./styles";
import TableComponent2 from "src/components/organism/TableComp2";
import TopFilter from "./TopFilter";
import TableFilterSearch from "src/components/organism/TableFilterSearch";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = [
	{
		Tanggal: "HD787",
		NRP: "Hd123",
		Nama: `33`,
		Posisi: "2022-17-08",
		Status: "2022-17-08",
		Time: "2022-17-08 02:12:12",
		Mac: "2022-17-08 02:12:12",
	},
];

export default function DeviceMonitoring() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const columns: ColumnDef<Person>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => info.getValue(),
			header: () => {
				return <span key={index}>{item}</span>;
			},
			footer: (props) => props.column.id,
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
		<Container>
			<TopFilter />
			<TableFilterSearch
				table={table}
				handleChangeTotalShowData={handleChangeTotalShowData}
				globalFilter={globalFilter}
				setGlobalFilter={setGlobalFilter}
				withButton={false}
				buttonTitle="EXPORT"
			/>
			<TableComponent2 table={table} />
		</Container>
	);
}
