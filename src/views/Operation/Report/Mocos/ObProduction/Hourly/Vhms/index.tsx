import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import { Grid } from "@hudoro/neron";
import RevisiDropdown from "atoms/RevisiDropdown";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["H57033"]: "0",
		["06"]: "0",
		["07"]: `0`,
		["08"]: "0",
		["09"]: "0",
		["10"]: "0",
		["11"]: "0",
		["12"]: "0",
		["13"]: "0",
		["14"]: "0",
		["15"]: "0",
		["16"]: "0",
		["17"]: "0",
		["TOTAL"]: "0",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function VHMS() {
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
					<RevisiDropdown placeholder="Type" />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
