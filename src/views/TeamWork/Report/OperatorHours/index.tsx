import { Grid } from "@hudoro/neron";
import React from "react";
import { ArrowUp, ArrowDown as AD } from "views/System/styles";
import { StyledSpan, ThItemContainer } from "./styles";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import ShowDetail from "./ShowDetail";
import TableComponent2 from "src/components/organism/TableComp2";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import { TitleText, Wrapper, WrapperTable, WrapperTitle } from "../styles";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = new Array(10).fill(0).map(() => {
	return {
		["NRP"]: "HD787",
		["Name"]: "Hd123",
		["Date"]: `331`,
		["Posisi"]: "2022-17-08",
		["Grade"]: "2022-17-08",
		["Join Date"]: "2022-17-08 02:12:12",
		["Masa Kerja"]: "2022-17-08 02:12:12",
		["ATR YTD"]: "2022-17-08 02:12:12",
		["Indisipliner"]: "2022-17-08 02:12:12",
		["ATD"]: "2022-17-08 02:12:12",
		["ACC"]: "2022-17-08 02:12:12",
		["Versaliti Readines"]: "2022-17-08 02:12:12",
		["Remark"]: "2022-17-08 02:12:12",
	};
});

export default function OperatorHours() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [isShowDetail, setIsShowDetail] = React.useState(false);

	const handleShowDetail = () => {
		setIsShowDetail(true);
	};

	const columns: ColumnDef<Person>[] = objTitle.map((item) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return item === "Indisipliner" ? (
					<Grid container justifyContent="center">
						<StyledSpan onClick={handleShowDetail} style={{ cursor: "pointer" }}>
							1
						</StyledSpan>
					</Grid>
				) : (
					info.getValue()
				);
			},
			header: () => (
				<ThItemContainer>
					<span>{item}</span>
					<Grid container flexDirection="column">
						<ArrowUp></ArrowUp>
						<AD></AD>
					</Grid>
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
		<Wrapper>
			{isShowDetail && <ShowDetail onclick={() => setIsShowDetail(false)} />}
			<WrapperTitle>
				<TitleText>Operator Hours</TitleText>
			</WrapperTitle>
			<WrapperTable>
				<TableFilterSearch
					table={table}
					handleChangeTotalShowData={handleChangeTotalShowData}
					globalFilter={globalFilter}
					setGlobalFilter={setGlobalFilter}
					withButton={false}
					buttonTitle="EXPORT"
				/>
				<TableComponent2 table={table} />
			</WrapperTable>
		</Wrapper>
	);
}
