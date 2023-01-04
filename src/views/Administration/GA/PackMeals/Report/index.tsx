import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Location"]: "",
		["1"]: "",
		["2"]: "",
		["3"]: "",
		["4"]: "",
		["5"]: "",
		["Total"]: "",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function Report() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	objTitle.sort((a, b) => {
		if (a === "Location" || b === "Total") {
			return -1;
		}
		if (a === "Total" || b === "Location") {
			return 1;
		}
		return +a - +b;
	});

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => info.renderValue(),
			footer: (info) => info.column.id,
		}),
	);

	return (
		<LayoutTable>
			<MigrateTable data={defaultDataTable} columns={columns} />
		</LayoutTable>
	);
}
