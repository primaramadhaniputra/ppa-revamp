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

import TableFilterSearch from "src/components/organism/TableFilterSearch";
import TableComponent2 from "src/components/organism/TableComp2";
import { ThItemContainer } from "../../../Riwayat/styles";
import CompleteArrow from "atoms/CompleteArrow";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";

interface ITable {
	[x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["ROL"]: "ROL",
		["DEPT"]: "ENG",
		["PERUSAHAAN"]: "AMM",
		["MASA SIMPER"]: "30-09-2022",
		["MASA MINEPERMIT"]: "30-09-2023",
		["MASA MCU"]: "20-03-2023",
		["EXP.SIMPER"]: "-2 HARI",
		["EXP.PERMIT"]: "-120 HARI",
		["EXP.MCU"]: "-120 HARI",
	};
});

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

export default function ShowDetail({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const columns: ColumnDef<ITable>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return <>{info.getValue()}</>;
			},
			header: () => {
				return (
					<ThItemContainer key={index} style={{ gap: "10px" }}>
						<span>{item}</span>
						<CompleteArrow />
					</ThItemContainer>
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
		<LayoutOverlayData
			isShowDetail={isShowDetail}
			setIsShowDetail={setIsShowDetail}
			formPosition={formPosition}
			title="LIST SIMPER AKTIF < 30 HARI DEPT ENG"
		>
			<TableFilterSearch
				table={table}
				handleChangeTotalShowData={handleChangeTotalShowData}
				globalFilter={globalFilter}
				setGlobalFilter={setGlobalFilter}
				withButton={true}
				buttonTitle="EXPORT"
			/>
			<TableComponent2 table={table} />
		</LayoutOverlayData>
	);
}
