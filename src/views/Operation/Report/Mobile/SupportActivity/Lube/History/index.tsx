import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import { Grid } from "@hudoro/neron";
import RevisiDropdown from "atoms/RevisiDropdown";
import LayoutTable from "src/components/layouts/LayoutTable";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Transaction ID"]: "-",
		["Date"]: "-",
		["Plant"]: "-",
		["Unit"]: "-",
		["HM"]: "-",
		["Sft"]: "-",
		["Mechanic"]: "-",
		["LT"]: "-",
		["Loc"]: "-",
		["Oil & Grease type"]: "-",
		["Component"]: "-",
		["Position"]: "-",
		["Qty"]: "-",
		["Uom"]: "-",
		["Status"]: "-",
		["Wo"]: "-",
		["Input By"]: "-",
		["Created"]: "-",
		["#"]: "-",
		["Updated By"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function History() {
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
					<RevisiDropdown placeholder="Shift" />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
