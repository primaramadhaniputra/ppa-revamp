import React from "react";
import DoughnutChart from "atoms/DoughnutChart";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import { DoughnutWrapper, TableWrapper, THContainer, Wrapper } from "./styles";
import TableComponent2 from "src/components/organism/TableComp2";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import Arrow from "atoms/Arrow";

interface Person {
	[x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
	return {
		Model: "HD787",
		CN: "Hd123",
		SN: `33${index}`,
		["Last Download"]: "2022-17-08",
		["Last Operation"]: "2022-17-08",
		["Pldcycn Record"]: "2022-17-08 02:12:12",
		["Trend Record"]: "2022-17-08 02:12:12",
		["Fault Record"]: "2022-17-08 02:12:12",
		["Machine History"]: "2022-17-08 02:12:12",
	};
});

export default function VHMSDownload() {
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const columns: ColumnDef<Person>[] = [
		{
			accessorKey: "Model",
			cell: (info) => info.getValue(),
			header: () => (
				<THContainer>
					<span>Model</span>
					<Arrow />
				</THContainer>
			),
			footer: (props) => props.column.id,
		},
		{
			accessorFn: (row) => row.CN,
			id: "CN",
			cell: (info) => info.getValue(),
			header: () => (
				<THContainer>
					<span>CN</span>
					<Arrow />
				</THContainer>
			),
			footer: (props) => props.column.id,
		},
		{
			accessorKey: "SN",
			header: () => (
				<THContainer>
					<span>SN</span>
					<Arrow />
				</THContainer>
			),
			footer: (props) => props.column.id,
		},

		{
			accessorKey: "Last Download",
			header: () => (
				<THContainer>
					<span>Last Download</span>
					<Arrow />
				</THContainer>
			),
			footer: (props) => props.column.id,
		},
		{
			accessorKey: "Last Operation",
			header: () => (
				<THContainer>
					<span>Last Operation</span>
					<Arrow />
				</THContainer>
			),
			footer: (props) => props.column.id,
		},
		{
			header: "VHMS Latest",
			footer: (props) => props.column.id,
			columns: [
				{
					accessorKey: "Pldcycn Record",
					header: () => (
						<THContainer>
							<span>Pldcycn Record</span>
							<Arrow />
						</THContainer>
					),
					footer: (props) => props.column.id,
				},
				{
					accessorKey: "Trend Record",
					header: () => (
						<THContainer>
							<span>Trend Record</span>
							<Arrow />
						</THContainer>
					),
					footer: (props) => props.column.id,
					cell: (info) => <span>{info.getValue()}</span>,
					enableColumnFilter: false,
				},
				{
					accessorKey: "Fault Record",
					header: () => (
						<THContainer>
							<span>Fault Record</span>
							<Arrow />
						</THContainer>
					),
					footer: (props) => props.column.id,
					cell: (info) => <span>{info.getValue()}</span>,
					enableColumnFilter: false,
				},
				{
					accessorKey: "Machine History",
					header: () => (
						<THContainer>
							<span>Machine History</span>
							<Arrow />
						</THContainer>
					),
					footer: (props) => props.column.id,
				},
			],
		},
	];

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
		sortDescFirst: true,
	});

	const handleChangeTotalShowData = (e: { target: { value: number } }) => {
		table.setPageSize(e.target.value);
	};

	return (
		<Wrapper>
			<TableWrapper>
				<TableFilterSearch
					table={table}
					handleChangeTotalShowData={handleChangeTotalShowData}
					globalFilter={globalFilter}
					setGlobalFilter={setGlobalFilter}
					withButton={true}
					buttonTitle="EXPORT"
				/>
				<TableComponent2 table={table} />
			</TableWrapper>
			<DoughnutWrapper>
				<DoughnutChart />
			</DoughnutWrapper>
		</Wrapper>
	);
}
