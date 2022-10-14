import { Grid, Icon, Text } from "@hudoro/neron";
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
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Html } from "next/document";
import { ThItemContainer } from "../../../../../styles";
import { Wrapper } from "./styles";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}
interface IColumns {
	[x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Date"]: "2022-10-07 14:25:14",
		["SMR"]: "7471",
		["Fuel Consumption Rate L/H"]: "127.2",
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

	const handleCloseShowDetail = () => {
		setIsShowDetail(false);
	};

	isShowDetail
		? disableBodyScroll(Html as unknown as HTMLElement | Element)
		: enableBodyScroll(Html as unknown as HTMLElement | Element);

	return (
		<>
			<Wrapper
				style={{
					zIndex: isShowDetail ? 999 : -999,
					opacity: isShowDetail ? 1 : 0,
					top: `${formPosition}px`,
				}}
				onClick={handleCloseShowDetail}
			>
				<Grid
					container
					flexDirection="column"
					gap={20}
					style={{
						maxWidth: "800px",
						margin: "30px auto",
						backgroundColor: "white",
						padding: "20px 10px",
					}}
				>
					<Grid container alignItems="center" justifyContent="space-between">
						<Text variant="h3">E52015 Cycle Data</Text>
						<Icon
							iconName="IcClose"
							style={{ cursor: "pointer" }}
							onClick={handleCloseShowDetail}
						/>
					</Grid>
					<TableComponent2
						table={table}
						styles={{ backgroundColor: "white", borderRadius: "5px" }}
					/>
				</Grid>
			</Wrapper>
		</>
	);
}
