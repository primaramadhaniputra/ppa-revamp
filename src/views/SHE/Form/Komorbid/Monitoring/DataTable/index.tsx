import React from "react";
import TableComponent2 from "src/components/organism/TableComp2";
import TableFilterSearch from "src/components/organism/TableFilterSearch";
import {
	ColumnDef,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import CompleteArrow from "atoms/CompleteArrow";
import { ThItemContainer } from "views/SHE/Form/styles";

interface IProps {
	[x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Action"]: "",
		["Tanggal"]: "27-09-2022 || 11:22:52",
		["Nomor"]: "KT08/SHE/2209/KMBD/00182",
		["Total Skor"]: "2",
		["Kategori Resiko"]: "Rendah",
		["NRP"]: "22004200",
		["Nama"]: "HARLY IKMA SEPTIAN",
		["Dept"]: "FLO",
		["Jabatan"]: "GROUP LEADER",
		["Posisi"]: "GROUP LEADER LOGISTIC",
		["Perusahaan"]: "AMM",
		["Site"]: "	MHU",
		["Jenis Kelamin"]: "L",
		["Skor JK"]: "1",
		["Tgl.Lahir"]: "02-09-1988",
		["Usia"]: "34 th",
		["Skor Usia"]: "0",
		["Body Mass Index"]: "25.28",
		["Skor BMI"]: "0",
		["Kondisi Immunosuppresive"]: "Tidak Ada",
		["Skor Kondisi Immunosuppresive"]: "0",
		["Penyakit Saluran Respirasi"]: "Tidak Ada",
		["Skor Penyakit Saluran Respirasi"]: "Tidak Ada",
	};
});

export default function DataTable() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	const [rowSelection, setRowSelection] = React.useState({});
	const [globalFilter, setGlobalFilter] = React.useState("");
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const columns: ColumnDef<IProps>[] = objTitle.map((item, index) => {
		return {
			accessorKey: item,
			cell: (info) => {
				return <>{info.getValue()}</>;
			},
			header: () => {
				return (
					<ThItemContainer key={index} style={{ minWidth: "120px" }}>
						<>
							<span>{item}</span>
							<CompleteArrow />
						</>
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
			<TableFilterSearch
				table={table}
				handleChangeTotalShowData={handleChangeTotalShowData}
				globalFilter={globalFilter}
				setGlobalFilter={setGlobalFilter}
				withButton={true}
				buttonTitle="EXPORT"
			/>
			<TableComponent2 table={table} />
		</>
	);
}
