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
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import { colors } from "utils/styles";
import { THContainer } from "atoms/THContainer";

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
		["Tanggal"]: "-",
		["NRP"]: "-",
		["Nama"]: "-",
		["Dept"]: "-",
		["Jabatan"]: "-",
	};
});

export default function DataDetail({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [rowSelection, setRowSelection] = React.useState({});
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const columns: ColumnDef<IColumns>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => info.getValue(),
			header: () => (
				<THContainer key={index} style={{ minWidth: "100px" }}>
					<Grid>
						<span>{item}</span>
					</Grid>
					<CompleteArrow color="white" />
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
			<LayoutOverlayData
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
				title="UNIT SUDAH MELAKUKAN P2H"
			>
				<Grid style={{ padding: "0 10px" }}>
					<TableFilterSearch
						table={table}
						handleChangeTotalShowData={handleChangeTotalShowData}
						globalFilter={globalFilter}
						setGlobalFilter={setGlobalFilter}
						withButton={true}
						buttonTitle="EXPORT"
					/>
					<TableComponent2
						table={table}
						styles={{ backgroundColor: "white", borderRadius: "5px" }}
						tableTheadStyles={{ backgroundColor: colors.blue, color: "white" }}
					/>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
