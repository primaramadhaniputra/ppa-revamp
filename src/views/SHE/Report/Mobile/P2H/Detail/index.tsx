import React from "react";
import TableComponent2 from "src/components/organism/TableComp2";
import TopFilter from "src/components/organism/TopFilter";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import { Grid } from "@hudoro/neron";
import { WrapperTable } from "../../styles";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import CompleteArrow from "atoms/CompleteArrow";
import { ThItemContainer } from "views/SHE/Report/styles";
import { IcEye } from "atoms/Icon";
import { colors } from "utils/styles";

interface IProps {
	[x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
	return {
		NRP: "HD787",
		Name: "Hd123",
		["Dept"]: `33${index}`,
		["Kode Unit"]: `33${index}`,
		Shift: "2022-17-08",
		Date: "123",
		Status: "123",
		["Atasan Status"]: "123",
		["Detail"]: "123",
	};
});

export default function Detail() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return (
					<>
						{info.column.id === "Detail" ? (
							<Grid container justifyContent="center">
								<IcEye width={18} style={{ cursor: "pointer" }} color={colors.blue} />
							</Grid>
						) : (
							info.getValue()
						)}
					</>
				);
			},
			header: (data) => {
				return (
					<ThItemContainer key={index} style={{ width: "100%", justifyContent: "space-around" }}>
						{data.header.id === "Detail" ? (
							<span>{item}</span>
						) : (
							<>
								<span>{item}</span>
								<CompleteArrow />
							</>
						)}
					</ThItemContainer>
				);
			},
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
			<TopFilter />
			<WrapperTable style={{ marginTop: "20px" }}>
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
		</>
	);
}
