import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import { TitleText, WrapperTitle } from "../../../styles";
import TopFilter from "src/components/organism/TopFilter";
import RevisiDropdown from "atoms/RevisiDropdown";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Nrp"]: "",
		["Status"]: "",
		["Nama"]: "",
		["Perusahaan"]: "",
		["Posisi"]: "",
		["Dept"]: "",
		["Alamat"]: "",
		["POH"]: "",
		["Berangkat"]: "",
		["Kembali"]: "",
		["Total Cuti"]: "",
		["Atasan"]: "",
		["Catatan"]: "",
	};
});

const columnHelper = createColumnHelper<Person>()

export default function LeavingReport() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	})
	)
		;

	return (
		<>
			<WrapperTitle>
				<TitleText> Report Cuti</TitleText>
			</WrapperTitle>
			<TopFilter>
				<Grid>
					<RevisiDropdown placeholder="status" />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
