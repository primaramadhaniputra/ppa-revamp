import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { TitleText, WrapperTitle } from "../../../styles";
import TopFilter from "src/components/organism/TopFilter";
import RevisiDropdown from "atoms/RevisiDropdown";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const columnHelper = createColumnHelper<Person>();

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Tanggal"]: "",
		["Nrp"]: "",
		["Nama"]: "",
		["Perusahaan"]: "",
		["Dept"]: "",
		["Posisi"]: "",
		["Day"]: "",
		["Ri"]: "",
		["RO"]: "",
		["Masuk"]: "",
		["Keluar"]: "",
		["TH"]: "",
		["RH"]: "",
		["WH"]: "",
		["OH"]: "",
		["SPL"]: "",
		["OHT"]: "",
	};
});

export default function AttendanceIndex() {
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
			<WrapperTitle>
				<TitleText>Monthly Recap Report</TitleText>
			</WrapperTitle>
			<TopFilter>
				<Grid>
					<RevisiDropdown placeholder="Company" />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
