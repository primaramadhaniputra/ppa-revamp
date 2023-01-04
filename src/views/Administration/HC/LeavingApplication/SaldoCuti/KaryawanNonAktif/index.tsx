import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Nrp"]: "",
		["Nama"]: "",
		["Dept"]: "",
		["Posisi"]: "",
		["Perusahaan"]: "",
		["Saldo Cuti Tahun ini"]: "",
		["Saldo Cuti Tahun lalu"]: "",
		["Saldo Cuti Besar"]: "",
	};
});

const columnHelper = createColumnHelper<Person>()

export default function KaryawanNonAktif() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	})
	);

	return (
		<LayoutTable style={{ marginTop: "20px" }}>
			<MigrateTable data={defaultDataTable} columns={columns} />
		</LayoutTable>
	);
}
