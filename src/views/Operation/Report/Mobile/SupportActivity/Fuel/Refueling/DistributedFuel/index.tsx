import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["FT"]: "-",
		["Volume"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function DistributedFuel() {
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
			<LayoutTable>
				<TitleText>Distributed Fuel</TitleText>
			</LayoutTable>
			<LayoutTable style={{ marginTop: "0" }}>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
