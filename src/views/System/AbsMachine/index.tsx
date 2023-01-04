import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = new Array(10).fill(0).map(() => {
	return {
		ID: "HD787",
		IP: "Hd123",
		Lokasi: `33`,
		["Last download"]: "2022-17-08",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function AbsMachine() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

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
