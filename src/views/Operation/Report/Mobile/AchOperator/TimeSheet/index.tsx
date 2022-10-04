import React from "react";
import TableComponent2 from "src/components/organism/TableComp2";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import TopFilter from "./TopFilter";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import CompleteArrow from "atoms/CompleteArrow";
import { ThItemContainer } from "views/SHE/Report/styles";
import { WrapperTable } from "../../../styles";
import { PointContainer, PointDesc, PointValue } from "./styles";
import { Grid } from "@hudoro/neron";

interface IProps {
	[x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["NRP"]: "22002062",
		["Nama"]: "JUNDI TSANI ABWABUL FATKHI",
		["Dept"]: "PRO",
		["Posisi"]: "OPERATOR BW",
		["True"]: "3",
		["False"]: "0",
		["Total"]: "3",
		["Ach"]: "100,00%",
		["Point"]: "100",
	};
});

export default function TimeSheet() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => info.getValue(),
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
		<WrapperTable>
			<TopFilter />
			<TableFilterSearch
				table={table}
				handleChangeTotalShowData={handleChangeTotalShowData}
				globalFilter={globalFilter}
				setGlobalFilter={setGlobalFilter}
				withButton={true}
				buttonTitle="EXPORT"
			/>
			<Grid container gap={10} style={{ marginBottom: "15px" }}>
				<PointContainer>
					<PointDesc>Point : 100</PointDesc>
					<PointValue>Istimewa</PointValue>
				</PointContainer>
				<PointContainer>
					<PointDesc>Point : 90</PointDesc>
					<PointValue style={{ backgroundColor: "#605CA8" }}>Baik Sekali</PointValue>
				</PointContainer>
				<PointContainer>
					<PointDesc>Point : 80</PointDesc>
					<PointValue style={{ backgroundColor: "#3C8DBC" }}>Baik</PointValue>
				</PointContainer>
				<PointContainer>
					<PointDesc>Point : 70</PointDesc>
					<PointValue style={{ backgroundColor: "#F39C12" }}>Butuh Perbaikan</PointValue>
				</PointContainer>
			</Grid>
			<TableComponent2 table={table} />
		</WrapperTable>
	);
}
