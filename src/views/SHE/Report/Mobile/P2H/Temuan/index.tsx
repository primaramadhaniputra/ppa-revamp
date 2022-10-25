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
import RevisiDropdown from "atoms/RevisiDropdown";
import { IcEye } from "atoms/Icon";
import { colors } from "utils/styles";

interface IProps {
	[x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
	return {
		Tanggal: "HD787",
		CN: "Hd123",
		["Hazard Code"]: `33${index}`,
		Item: "2022-17-08",
		Remark: "2022-17-08",
		Detail: "",
	};
});

export default function Temuan() {
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
								<IcEye width={18} color={colors.blue} style={{ cursor: "pointer" }} />
							</Grid>
						) : (
							info.getValue()
						)}
					</>
				);
			},
			header: (data) => {
				return (
					<ThItemContainer key={index}>
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
			<TopFilter>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Operator" />
				</Grid>
			</TopFilter>
			<WrapperTable style={{ marginTop: "20px" }}>
				<TableFilterSearch
					table={table}
					handleChangeTotalShowData={handleChangeTotalShowData}
					globalFilter={globalFilter}
					setGlobalFilter={setGlobalFilter}
					withButton={true}
					buttonTitle="EXPORT"
				/>
				<TableComponent2 table={table} />
			</WrapperTable>
		</>
	);
}
