import React from "react";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	getSortedRowModel,
} from "@tanstack/react-table";
import TableComponent2 from "src/components/organism/TableComp2";
import { HoverP } from "./styles";
import ShowDetail from "./ShowDetail";
import { colors } from "utils/styles";
import { THContainer } from "atoms/THContainer";

interface IProps {
	[x: string]: any;
}

const arr = new Array(5).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["DEPARTEMENT"]: "ENG",
		["MP"]: "68",
		["AKTIF SIMPER < 30 HARI"]: "1",
		["SIMPER EXPIRED"]: "0",
		["AKTIF PERMIT < 30 HARI"]: "10",
		["AKTIF MCU < 30"]: "10",
		["EXPIRED MCU"]: "4",
	};
});

export default function TopTable() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return info.column.id === "DEPARTEMENT" ? (
					<span style={{ padding: "8px 5px" }}>{info.getValue()}</span>
				) : (
					<HoverP onClick={handleShowDetail} style={{ padding: "8px 5px" }}>
						{info.getValue()}
					</HoverP>
				);
			},
			header: () => {
				return (
					<THContainer key={index}>
						<span>{item}</span>
					</THContainer>
				);
			},
		};
	});
	const table = useReactTable({
		data: defaultDataTable,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		debugTable: true,
		getSortedRowModel: getSortedRowModel(),
	});

	return (
		<>
			<ShowDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<TableComponent2
				table={table}
				noPagination={true}
				tableTheadStyles={{ backgroundColor: colors.primary, color: "white" }}
				tableThStyles={{ padding: "20px 5px" }}
			/>
		</>
	);
}
