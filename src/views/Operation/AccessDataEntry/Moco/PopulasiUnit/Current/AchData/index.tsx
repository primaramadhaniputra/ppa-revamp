import { Grid } from "@hudoro/neron";
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
import { ThItemContainer } from "../../../../styles";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";

interface IProps {
	isShowAch: boolean;
	setIsShowAch: React.Dispatch<React.SetStateAction<boolean>>;
	achPosition: number;
}
interface IColumns {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["No"]: "",
		["Data"]: "",
		["Ach."]: "",
		["Null"]: "",
		["Persen"]: "",
	};
});

export default function AchData({ isShowAch, setIsShowAch, achPosition }: IProps) {
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
				isShowDetail={isShowAch}
				setIsShowDetail={setIsShowAch}
				formPosition={achPosition}
				title="DETAIL ACHIEVEMENT DATA UNIT"
			>
				<Grid style={{ padding: "10px" }}>
					<TableComponent2
						table={table}
						styles={{ backgroundColor: "white", borderRadius: "5px" }}
					/>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
