import React from "react";
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
import { colors } from "utils/styles";

interface IProps {
	[x: string]: any;
}

const arr = new Array(5).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["DEPARTEMENT"]: "ENG",
		["MP"]: "68",
		["FAI"]: "1",
		["LTI"]: "0",
		["FTL"]: "10",
		["PDM"]: "10",
		["NMS"]: "4",
		["MTI"]: "4",
		["FC"]: "4",
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
					<ThItemContainer
						key={index}
						style={{
							gap: "10px",
							backgroundColor: colors.primary,
							width: "100%",
							color: "white",
							padding: "10px 0",
						}}
					>
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
			<div style={{ margin: "20px 0" }}>
				<TableComponent2 table={table} noPagination={true} />
			</div>
		</>
	);
}