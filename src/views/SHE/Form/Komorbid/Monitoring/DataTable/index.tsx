import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	[x: string]: any;
}

const columnHelper = createColumnHelper<IProps>();

const arr = new Array(10).fill(0);
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
		["Tgl Lahir"]: "02-09-1988",
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
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => info.renderValue(),
			footer: (info) => info.column.id,
		}),
	);

	return (
		<>
			<MigrateTable data={defaultDataTable} columns={columns} />
		</>
	);
}
