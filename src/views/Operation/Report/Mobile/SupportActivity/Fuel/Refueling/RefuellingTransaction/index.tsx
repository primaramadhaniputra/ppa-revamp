import React from "react";
import TableComponent2 from "src/components/organism/TableComp2";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import CompleteArrow from "atoms/CompleteArrow";
import RevisiDropdown from "atoms/RevisiDropdown";
import { Grid } from "@hudoro/neron";
import { THContainer } from "atoms/THContainer";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";

interface IProps {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Transaction ID"]: "-",
		["Unit"]: "-",
		["Date"]: "-",
		["Sft"]: "-",
		["Time"]: "-",
		["Vol"]: "-",
		["HM"]: "-",
		["FT"]: "-",
	};
});

export default function RefuellingTransaction() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => info.getValue(),
			header: () => (
				<THContainer key={index}>
					<span>{item}</span>
					<CompleteArrow />
				</THContainer>
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
			<TopFilter>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Shift" />
				</Grid>
			</TopFilter>
			<LayoutTable style={{ marginTop: "0" }}>
				<TitleText>Refueling Transaction</TitleText>
			</LayoutTable>
			<LayoutTable style={{ marginTop: "0" }}>
				<TableFilterSearch
					table={table}
					handleChangeTotalShowData={handleChangeTotalShowData}
					globalFilter={globalFilter}
					setGlobalFilter={setGlobalFilter}
					withButton={true}
					buttonTitle="EXPORT"
				/>
				<TableComponent2 table={table} />
			</LayoutTable>
		</>
	);
}
