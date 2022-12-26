import { fontFamilies, Grid, Text } from "@hudoro/neron";
import React from "react";
import { colors, fontWeights } from "utils/styles";
import { ShowChartWrapper, ThItemContainer, Wrapper } from "./styles";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import TableComponent2 from "src/components/organism/TableComp2";
import StyledButton from "atoms/StyledButton";
import { exportFile } from "utils/functions";
import RevisiDropdown from "atoms/RevisiDropdown";
import DataDetail from "./DataDetail";

interface IProps {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		LOADER: "-",
		["06"]: "-",
		["07"]: `-`,
		["08"]: "-",
		["09"]: "-",
		["10"]: "-",
		["11"]: "-",
		["12"]: "-",
		["13"]: "-",
		["14"]: "-",
		["15"]: "-",
		["16"]: "-",
		["17"]: "-",
		["TOTAL"]: "-",
	};
});

export default function CCR() {
	const [dataTable] = React.useState(defaultDataTable);
	const objTitle = Object.keys(dataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [
		globalFilter,
		// setGlobalFilter
	] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
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
				return info.getValue();
			},
			header: () => (
				<ThItemContainer key={index}>
					<span>{item}</span>
				</ThItemContainer>
			),
			footer: (info) => {
				const headerId = info.header.id !== "LOADER" ? info.header.id : "";
				const data = info.table.options.data
					.map((e) => e[headerId])
					.filter((e) => e !== null)
					.filter((e) => e !== undefined);
				const totalData =
					data.length > 0 ? data.reduce((total, num) => parseInt(total) + parseInt(num)) : 0;
				return (
					<span
						style={{
							fontWeight: fontWeights.bold,
							fontFamily: fontFamilies.poppins,
						}}
					>
						{info.header.id === "LOADER" ? "TOTAL" : `${totalData}`}
					</span>
				);
			},
		};
	});
	const table = useReactTable({
		data: dataTable,
		columns: columns as any,
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

	// const handleChangeTotalShowData = (e: { target: { value: number } }) => {
	//   table.setPageSize(e.target.value);
	// };
	return (
		<>
			<DataDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<TopFilter>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Shift" />
				</Grid>
			</TopFilter>
			<Wrapper>
				<Grid
					container
					gap={20}
					justifyContent="space-between"
					alignItems="center"
					style={{ margin: "20px 0" }}
				>
					<Text variant="h4" style={{ fontWeight: fontWeights.semi }}>
						Hourly Production
					</Text>
				</Grid>
				<ShowChartWrapper>
					<Grid>
						<StyledButton onClick={handleShowDetail}>Show Chart</StyledButton>
					</Grid>
					<Grid>
						<StyledButton style={{ backgroundColor: colors.borderBlue }} onClick={exportFile}>
							Export
						</StyledButton>
					</Grid>
				</ShowChartWrapper>
				<TableComponent2 table={table} noPagination={true} withFooter={true} />
			</Wrapper>
		</>
	);
}
