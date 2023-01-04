import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import RevisiDropdown from "atoms/RevisiDropdown";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["PERUSAHAAN"]: "",
		["TGL CLAIM"]: "",
		["TGL KWITANSI"]: "",
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

const columnHelper = createColumnHelper<Person>()

export default function ReportBenefitClaim() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	})
	);

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
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
