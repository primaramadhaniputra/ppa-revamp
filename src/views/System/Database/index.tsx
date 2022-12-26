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
import { Wrapper } from "./styles";
import TableComponent2 from "src/components/organism/TableComp2";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import { ThItemContainer } from "../styles";
import CompleteArrow from "atoms/CompleteArrow";
import { Grid, Icon } from "@hudoro/neron";
import { notify } from "utils/functions";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = [
	{
		ID: "HD787",
		User: "Hd123",
		Host: `33}`,
		DB: "2022-17-08",
		Command: "2022-17-08",
		Time: "2022-17-08 02:12:12",
		State: "2022-17-08 02:12:12",
		Info: "2022-17-08 02:12:12",
		Action: "",
	},
];

export default function Database() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const handleKillProccess = () => {
		if (confirm("are you sure dude")) {
			return notify("okey", "success");
		}
	};

	const columns: ColumnDef<Person>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return info.column.id === "Action" ? (
					<Grid
						container
						justifyContent="center"
						style={{ cursor: "pointer" }}
						onClick={handleKillProccess}
					>
						<Icon iconName="IcTrash" size={16} color="red" />
					</Grid>
				) : (
					info.getValue()
				);
			},
			header: (data) => {
				return (
					<ThItemContainer key={index}>
						<span>{item}</span>
						{data.column.id !== "Action" && <CompleteArrow />}
					</ThItemContainer>
				);
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
		<Wrapper>
			<TableFilterSearch
				table={table}
				handleChangeTotalShowData={handleChangeTotalShowData}
				globalFilter={globalFilter}
				setGlobalFilter={setGlobalFilter}
				withButton={false}
				buttonTitle="EXPORT"
			/>
			<TableComponent2 table={table} />
		</Wrapper>
	);
}
