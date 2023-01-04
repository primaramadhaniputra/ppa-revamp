import { Text } from "@hudoro/neron";
import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Departemen"]: "",
		["MP"]: "",
		["Kontrak 1"]: "",
		["Kontrak 2"]: "",
		["Kontrak 3"]: "",
	};
});

const columnHelper = createColumnHelper<Person>()

export default function SummaryTable() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	})
	);

	return (
		<LayoutTable style={{ marginTop: 0 }}>
			<Text variant="h4" style={{ marginBottom: "20px" }}>
				Summary
			</Text>
			<MigrateTable data={defaultDataTable} columns={columns} />
		</LayoutTable>
	);
}
