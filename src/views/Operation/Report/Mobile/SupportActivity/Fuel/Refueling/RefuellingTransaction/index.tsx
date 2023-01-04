import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import RevisiDropdown from "atoms/RevisiDropdown";
import { Grid } from "@hudoro/neron";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Transaction ID"]: "-",
		["Unit"]: "-",
		["Date"]: "-",
		["Sft"]: "-",
		["Time"]: "-",
		["Vol"]: "-",
		["HM"]: "-",
		["FT"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function RefuellingTransaction() {
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
			<LayoutTable style={{ marginTop: "0" }}>
				<TitleText>Refueling Transaction</TitleText>
			</LayoutTable>
			<LayoutTable style={{ marginTop: "0" }}>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
