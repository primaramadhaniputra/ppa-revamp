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
import CompleteArrow from "atoms/CompleteArrow";
import CardImage from "./CardImage";
import LayoutTable from "src/components/layouts/LayoutTable";
import { THContainer } from "atoms/THContainer";

interface IProps {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		Tanggal: "-",
		Unit: "-",
		["Operator"]: "-",
		Shift: "-",
		P2H: "-",
		Approver: "-",
		["Status APPR"]: "-",
	};
});

export default function Monitoring() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => info.getValue(),
			header: (data) => {
				return (
					<THContainer key={index}>
						{data.header.id === "Detail" ? (
							<span>{item}</span>
						) : (
							<>
								<span>{item}</span>
								<CompleteArrow />
							</>
						)}
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
		<LayoutTable>
			<CardImage />
			<TableComponent2 table={table} />
		</LayoutTable>
	);
}
