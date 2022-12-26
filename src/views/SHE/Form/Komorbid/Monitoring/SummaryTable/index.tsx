import React from "react";
import TableComponent2 from "src/components/organism/TableComp2";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	getSortedRowModel,
} from "@tanstack/react-table";
import { P } from "./styles";
import ShowDetail from "./ShowDetail";
import { colors } from "utils/styles";
import { THContainer } from "atoms/THContainer";

interface IProps {
	[x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["DEPARTEMENT"]: "ENG",
		["TOTAL"]: "56",
		["RESIKO RENDAH"]: "54",
		["RESIKO SEDANG"]: "2",
		["RESIKO TINGGI"]: "0",
		["UNFIT"]: "0",
	};
});

export default function SummaryTable() {
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
					<span style={{ padding: "5px" }}>{info.getValue()}</span>
				) : (
					<P style={{ padding: "5px" }} onClick={handleShowDetail}>
						{info.getValue()}
					</P>
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
			/>
		</>
	);
}
