import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["End Contract"]: "-",
		["Dept"]: "-",
		["Atasan"]: "-",
		["Sect/Dept"]: "-",
		["Manager"]: "-",
		["Pkwt by HO"]: "-",
		["Closed"]: "-",
		["Overall"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function LeadTimeTable() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => info.renderValue(),
			footer: (info) => info.column.id,
		}),
	);

	return (
		<Grid style={{ padding: "0 10px" }}>
			<MigrateTable data={defaultDataTable} columns={columns} />
		</Grid>
	);
}
