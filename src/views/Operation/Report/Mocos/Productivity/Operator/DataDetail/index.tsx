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
import { ThItemContainer } from "../../../../styles";
import { Container, Wrapper } from "./styles";

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
		["NO"]: "1",
		["Date"]: "2022-10-19",
		["Shift"]: "D",
		["Model"]: "PC400LCSE-8",
		["Unit"]: "E5412",
		["HM"]: "0,00",
		["Distance"]: "",
		["Cycle"]: "",
		["Production"]: "",
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
				<Container
					style={{
						transform: isShowDetail ? "translateY(100px)" : "translateY(0)",
					}}
				>
					<Grid container alignItems="center" justifyContent="space-between">
						<Text variant="h4">19019713 - ANDIKA SETYO LAKSONO</Text>
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
				</Container>
			</Wrapper>
		</>
	);
}
