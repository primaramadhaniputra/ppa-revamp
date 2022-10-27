import React from "react";
import TableComponent2 from "src/components/organism/TableComp2";
import { TableWrapper } from "./styles";
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
import { TitleText, WrapperTable, WrapperTitle } from "../../../styles";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import CompleteArrow from "atoms/CompleteArrow";
import { ThItemContainer } from "views/SHE/Report/styles";
import { Grid, Text } from "@hudoro/neron";
import RevisiDropdown from "atoms/RevisiDropdown";
import { colors, fontWeights } from "utils/styles";
import DataDetail from "./DataDetail";

interface IProps {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["NO"]: "-",
		["TGL.PELAPORAN"]: "-",
		["PELAPOR"]: "-",
		["KATEGORI"]: "-",
		["DESKRIPSI"]: "-",
		["LOKASI"]: "-",
		["DETAIL LOKASI"]: "-",
		["DEPT"]: "-",
		["PIC EMP"]: "-",
		["STATUS PELAPORAN"]: "-",
		["ACH"]: "",
	};
});

export default function Individual() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
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
				return info.column.id === "ACH" ? (
					<Grid container alignItems="center" justifyContent="center" gap={7}>
						<Text
							variant="h4"
							onClick={handleShowDetail}
							style={{
								color: colors.primary,
								cursor: "pointer",
								fontWeight: fontWeights.extraBold,
							}}
						>
							100%
						</Text>
					</Grid>
				) : (
					info.getValue()
				);
			},
			header: () => (
				<ThItemContainer key={index}>
					<span>{item}</span>
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
			<DataDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<WrapperTitle>
				<TitleText>ACHIEVEMENT SAP</TitleText>
			</WrapperTitle>
			<TableWrapper>
				<TopFilter>
					<Grid style={{ minWidth: "200px" }}>
						<RevisiDropdown placeholder="Dept" />
					</Grid>
				</TopFilter>
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
			</TableWrapper>
		</>
	);
}
