import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import UltimateInput from "src/components/organism/UltimateInput";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["NRP"]: "",
		["Nama"]: "",
		["Dept"]: "",
		["Jabatan"]: "",
		["Usia"]: "",
		["POH"]: "",
		["Departure"]: "",
		["Arrived"]: "",
		["Flight"]: "",
		["Departure Time"]: "",
		["Arrival Time"]: "",
		["Airline"]: "",
		["Emergency Number"]: "",
		["Status"]: "",
		["File Ticket"]: "",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function ReportTicket() {
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
			<TopFilter>
				<Grid>
					<UltimateInput isInputSelect={true} title="Status" maxLableWidth="50px" />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
