import { Grid } from "@hudoro/neron";
import React from "react";
import { ThItemContainer } from "./styles";
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
import TableComponent2 from "src/components/organism/TableComp2";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import { Wrapper, WrapperTable } from "../../styles";
import CompleteArrow from "atoms/CompleteArrow";

interface IProps {
	[x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["NRP"]: "120029",
		["Nama"]: "M.Syarif",
		["Perusahaan"]: "AMM",
		["Dept"]: "PRO",
		["Posisi"]: "OPERATOR PC2000",
		["Hiring Date"]: "2017-02-20	",
		["Masa Kerja(Bulan)"]: "67",
		["Model"]: "PC1250-8R",
		["Loader"]: "-",
		["Material"]: "OB",
		["Produktivitas"]: "0.00",
		["ATR"]: "100",
		["SP"]: "0",
		["P2H"]: "100",
		["Time Sheet"]: "50",
		["Poin Prod"]: "50",
		["Poin ATR"]: "50",
		["Poin SP"]: "50",
		["Poin P2H"]: "50",
		["Poin Time Sheet"]: "50",
		["Total"]: "50",
		["Syarat Masa Kerja"]: "1",
		["Syarat Produktivitas"]: "1",
		["Syarat SP"]: "1",
		["Syarat ATR"]: "1",
		["Pra Syarat"]: "3",
		["Kategori"]: "BP",
	};
});

export default function Riwayat() {
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
				<TableComponent2 table={table} />
			</WrapperTable>
		</Wrapper>
	);
}
