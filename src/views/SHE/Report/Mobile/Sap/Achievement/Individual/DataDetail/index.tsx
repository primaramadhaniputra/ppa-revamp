import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
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
import { Description, Title } from "./styles";
import { Grid } from "@hudoro/neron";

interface IProps {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["BULAN"]: "-",
		["NRP"]: "-",
		["NAMA"]: "-",
		["DEPT"]: "-",
		["KTA"]: "-",
		["TTA"]: "-",
		["INS"]: "-",
		["OBS"]: "-",
		["PKR"]: "-",
		["WUC"]: "-",
		["SMT"]: "-",
		["COC"]: "-",
		["AHC"]: "-",
	};
});

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

export default function DataDetail({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const columns: ColumnDef<IProps>[] = objTitle.map((item) => {
		return {
			accessorKey: item,
			cell: (info) => info.getValue(),
			header: () => <span>{item}</span>,
		};
	});

	const table = useReactTable({
		data: defaultDataTable,
		columns: columns as any,
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
				title="Detail Achievement SAP"
				width={1500}
			>
				<TableComponent2 table={table} noPagination={true} />
				<Grid style={{ marginTop: "20px" }} container flexDirection="column" gap={5}>
					<Title>Note :</Title>
					<Description>
						untuk perhitungan achievement, nilai actual maksimal adalah nilai plan. contoh act 10 /
						plan 9 maka ketika perhitungan ach menjadi 9/9
					</Description>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
