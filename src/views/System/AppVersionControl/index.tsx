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
import { colors, fontWeights } from "utils/styles";
import { fontFamilies, Text } from "@hudoro/neron";
import TableComponent2 from "src/components/organism/TableComp2";
import DataDetail from "./DataDetail";
import { THContainer } from "atoms/THContainer";
import LayoutTable from "src/components/layouts/LayoutTable";

interface Person {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map((_, index) => {
	return {
		Dept: "HD787",
		MP: "Hd123",
		["New Version"]: `33${index}`,
		["Old Version"]: `33${index}`,
		Updated: "2022-17-08",
	};
});

export default function AppVersionControl() {
	const [rowSelection, setRowSelection] = React.useState({});
	// const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};
	const columns: ColumnDef<Person>[] = [
		{
			accessorKey: "Dept",
			cell: (info) => info.getValue(),
			header: () => (
				<THContainer>
					<span>Dept</span>
				</THContainer>
			),
		},
		{
			accessorFn: (row) => row.MP,
			id: "MP",
			cell: (info) => info.getValue(),
			header: () => <span>MP</span>,
		},
		{
			accessorKey: "New Version",
			cell: (info) => (
				<span style={{ color: colors.blueGrey, cursor: "pointer" }} onClick={handleShowDetail}>
					{info.getValue()}
				</span>
			),
			header: () => <span>New Version</span>,
		},
		{
			accessorKey: "Old Version",
			cell: (info) => (
				<span style={{ color: colors.blueGrey, cursor: "pointer" }} onClick={handleShowDetail}>
					{info.getValue()}
				</span>
			),
			header: () => <span>Old Version</span>,
		},
		{
			accessorKey: "Updated",
			header: () => <span>Updated</span>,
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
			<DataDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<LayoutTable>
				<Text
					variant="h4"
					style={{
						textAlign: "center",
						fontFamily: fontFamilies.poppins,
						fontWeight: fontWeights.semi,
						marginBottom: "20px",
					}}
				>
					Mobile App Version Control MHU
				</Text>
				<TableComponent2 table={table} noPagination={true} withFooter={false} />
			</LayoutTable>
		</>
	);
}
