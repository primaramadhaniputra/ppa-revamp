import { Grid, Text } from "@hudoro/neron";
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
import TableComponent2 from "src/components/organism/TableComp2";
import CompleteArrow from "atoms/CompleteArrow";
import { ThItemContainer } from "../../styles";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { fontSizing, fontWeights } from "utils/styles";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}
interface IColumns {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["No"]: "-",
		["Date"]: "-",
		["Sanksi"]: "-",
		["Jenis"]: "-",
		["Status"]: "-",
	};
});

export default function DataDetail({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const columns: ColumnDef<IColumns>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => info.getValue(),
			header: () => (
				<ThItemContainer key={index} style={{ minWidth: "100px" }}>
					<Grid>
						<span>{item}</span>
					</Grid>
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
			<LayoutOverlayData
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
				title="RIWAYAT PELANGGARAN"
			>
				<Text
					variant="h4"
					style={{
						marginBottom: "20px",
						fontSize: fontSizing.xs.fontSize,
						fontWeight: fontWeights.bold,
					}}
				>
					13040438 - MARTINUS NAPA
				</Text>
				<TableComponent2
					table={table}
					styles={{ backgroundColor: "white", borderRadius: "5px" }}
					noPagination={true}
				/>
			</LayoutOverlayData>
		</>
	);
}