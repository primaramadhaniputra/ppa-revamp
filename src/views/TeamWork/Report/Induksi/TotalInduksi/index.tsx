import React from "react";
import TableComponent2 from "src/components/organism/TableComp2";
import { Container, TextInfo, Wrapper } from "./styles";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ThItemContainer } from "../styles";
import { Grid, Icon, Text } from "@hudoro/neron";
import { fontSizing, fontWeights } from "utils/styles";
import ShowDetail from "./ShowDetail";
import TableFilterSearch from "src/components/organism/TableFilterSearch";

interface IProps {
	[x: string]: any;
}

const arr = new Array(3).fill(0);
export const defaultDataTable = arr.map((_, index) => {
	return {
		NRP: "HD787",
		Nama: "Hd123",
		Posisi: `33${index}`,
		Dept: "2022-17-08",
		["Tanggal Detail"]: "2022-17-08",
		["Detail"]: "2022-17-08",
	};
});

export default function TotalInduksi() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [isShowDetail, setIsShowDetail] = React.useState(false);

	const handleShowDetail = () => {
		setIsShowDetail(true);
	};

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) =>
				info.column.id === "Detail" ? (
					<Grid
						container
						justifyContent="center"
						style={{
							backgroundColor: "#4A7ABC",
							padding: "3px 0",
							borderRadius: 3,
						}}
					>
						<Icon
							iconName="IcSearch"
							color="white"
							onClick={handleShowDetail}
							style={{ cursor: "pointer" }}
						/>
					</Grid>
				) : (
					info.getValue()
				),
			header: () => (
				<ThItemContainer key={index}>
					<span>{item}</span>
					<Grid container flexDirection="column">
						<ArrowUp></ArrowUp>
						<ArrowDown></ArrowDown>
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
		<>
			{isShowDetail && <ShowDetail onclick={() => setIsShowDetail(false)} />}
			<Wrapper>
				<Container>
					<Text
						variant="h4"
						style={{
							fontWeight: fontWeights.bold,
							display: "flex",
							alignItems: "center",
							fontSize: fontSizing.xl.fontSize,
							color: "#4F5458",
						}}
					>
						Total Induksi
					</Text>
					<TextInfo>24 orang</TextInfo>
				</Container>
				<TableFilterSearch
					table={table}
					handleChangeTotalShowData={handleChangeTotalShowData}
					globalFilter={globalFilter}
					setGlobalFilter={setGlobalFilter}
					withButton={true}
					buttonTitle="EXPORT XLS"
				/>
				<TableComponent2 table={table} />
			</Wrapper>
		</>
	);
}
