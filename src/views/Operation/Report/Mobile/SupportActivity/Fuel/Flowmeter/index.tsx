import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import RevisiDropdown from "atoms/RevisiDropdown";
import { Grid } from "@hudoro/neron";
import LayoutTable from "src/components/layouts/LayoutTable";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Date"]: "-",
		["Actual Date"]: "-",
		["FT"]: "-",
		["Seq"]: "-",
		["Lokasi"]: "-",
		["IO"]: "-",
		["Flowmeter"]: "-",
		["Checker"]: "-",
		["Posisi"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function Flowmeter() {
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
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="FT" />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
