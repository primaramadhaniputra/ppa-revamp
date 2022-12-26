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
import { fontWeights } from "utils/styles";
import { fontFamilies, Text } from "@hudoro/neron";
import { StyledText } from "./styles";
import TableComponent2 from "src/components/organism/TableComp2";
import CompleteArrow from "atoms/CompleteArrow";
import DataDetail from "./DataDetail";
import { THContainer } from "atoms/THContainer";
import LayoutTable from "src/components/layouts/LayoutTable";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = [
	{
		["Dept"]: "COE",
		["MP"]: "123",
		["SUDAH MENGISI"]: "0",
		["ACHIEVEMENT"]: "1",
	},
];

export default function Survey() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	// const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const columns: ColumnDef<Person>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return info.column.id === "MP" ? (
					<StyledText onClick={handleShowDetail}>{info.getValue()}</StyledText>
				) : (
					info.getValue()
				);
			},
			header: () => {
				return (
					<THContainer>
						<span key={index}>{item}</span>
						<CompleteArrow />
					</THContainer>
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
					Survey ESG achievment MHU
				</Text>
				<TableComponent2 table={table} noPagination={true} />
			</LayoutTable>
		</>
	);
}
