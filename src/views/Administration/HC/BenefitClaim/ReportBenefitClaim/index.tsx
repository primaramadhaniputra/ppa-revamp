import { Grid } from "@hudoro/neron";
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
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import CompleteArrow from "atoms/CompleteArrow";
import { ThItemContainer, WrapperTable } from "../../../styles";
import TopFilter from "src/components/organism/TopFilter";
import RevisiDropdown from "atoms/RevisiDropdown";
import TableGrandTotals from "./TableGrandTotals";

interface IProps {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["PERUSAHAAN"]: "",
		["TGL.CLAIM"]: "",
		["TGL.KWITANSI"]: "",
		["MODIFIED DATE"]: "",
		["NIK"]: "",
		["NAMA"]: "",
		["DEPARTEMEN"]: "",
		["KODE KLAIM"]: "",
		["HUBUNGAN"]: "",
		["PLAFON AWAL"]: "",
		["KALIM RJ"]: "",
		["PLAFON UPDATE"]: "",
		["RECEIPT"]: "",
		["STATUS"]: "",
		["KETERANGAN"]: "",
	};
});

export default function ReportBenefitClaim() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
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
				<Grid>
					<RevisiDropdown placeholder="Jenis" />
				</Grid>
				<Grid>
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
			<TableGrandTotals />
		</>
	);
}
