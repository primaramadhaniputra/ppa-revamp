import React from "react";
import { ThItemContainer, Wrapper } from "./styles";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import TopFilter from "./TopFilter";
import TableComponent2 from "src/components/organism/TableComp2";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import { WrapperTable } from "../../styles";

interface IProps {
	[x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["H57033"]: "0",
		["06"]: "0",
		["07"]: `0`,
		["08"]: "0",
		["09"]: "0",
		["10"]: "0",
		["11"]: "0",
		["12"]: "0",
		["13"]: "0",
		["14"]: "0",
		["15"]: "0",
		["16"]: "0",
		["17"]: "0",
		["TOTAL"]: "0",
	};
});

export default function VHMS() {
	const [dataTable] = React.useState(defaultDataTable);
	const objTitle = Object.keys(dataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return info.getValue();
			},
			header: () => (
				<ThItemContainer key={index}>
					<span>{item}</span>
				</ThItemContainer>
			),
			footer: (info) => info,
		};
	});
	const table = useReactTable({
		data: dataTable,
		columns: columns as any,
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
			<Wrapper>
				<WrapperTable>
					<TopFilter />
					<TableFilterSearch
						table={table}
						handleChangeTotalShowData={handleChangeTotalShowData}
						globalFilter={globalFilter}
						setGlobalFilter={setGlobalFilter}
						withButton={true}
						buttonTitle="EXPORT"
					/>
					<TableComponent2 table={table} noPagination={true} />
				</WrapperTable>
			</Wrapper>
		</>
	);
}
