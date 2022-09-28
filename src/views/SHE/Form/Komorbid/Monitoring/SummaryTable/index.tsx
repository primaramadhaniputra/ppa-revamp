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
import { ThItemContainer } from "../../../Licence/styles";
import { P } from "./styles";
import ShowDetail from "./ShowDetail";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Html } from "next/document";

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

	const handleHideDetail = () => {
		setIsShowDetail(false);
		setformPosition(0);
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
					<ThItemContainer key={index} style={{ gap: "10px" }}>
						<span>{item}</span>
					</ThItemContainer>
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

	isShowDetail
		? disableBodyScroll(Html as unknown as HTMLElement | Element)
		: enableBodyScroll(Html as unknown as HTMLElement | Element);

	return (
		<>
			<ShowDetail
				onclick={handleHideDetail}
				styles={{
					zIndex: `${isShowDetail ? "999" : "-999"}`,
					opacity: `${isShowDetail ? "1" : "0"}`,
				}}
				top={formPosition}
			/>
			<TableComponent2 table={table} noPagination={true} />
		</>
	);
}
