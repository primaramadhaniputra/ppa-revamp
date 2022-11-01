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
import { TitleText } from "../../../styles";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import CompleteArrow from "atoms/CompleteArrow";
import { ThItemContainer } from "views/SHE/Report/styles";
import LayoutTable from "src/components/layouts/LayoutTable";

interface IProps {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["No"]: "-",
		["Report"]: "-",
		["Target"]: "-",
		["Actual"]: "-",
	};
});

export default function IndividualYtd() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => info.getValue(),
			header: () => (
				<ThItemContainer key={index}>
					<span>{item}</span>
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
			<LayoutTable>
				<TitleText>ACH Individual This Year</TitleText>
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
