import React from "react";
import { WrapperTable } from "../../styles";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	getSortedRowModel,
} from "@tanstack/react-table";
import { ThItemContainer } from "../styles";
import TableComponent2 from "src/components/organism/TableComp2";
import { HoverP } from "./styles";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Html } from "next/document";
import ShowDetail from "./ShowDetail";

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

	const handleHideDetail = () => {
		setIsShowDetail(false);
		setformPosition(0);
	};

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return <HoverP onClick={handleShowDetail}>{info.getValue()}</HoverP>;
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
			<WrapperTable style={{ marginTop: "20px" }}>
				<TableComponent2 table={table} noPagination={true} />
			</WrapperTable>
		</>
	);
}
