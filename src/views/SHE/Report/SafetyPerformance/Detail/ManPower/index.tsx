import React, { useMemo } from "react";
import { TableHeader } from "../styles";
import { createColumnHelper } from "@tanstack/react-table";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = [
	{
		["Description"]: "-",
		["Sebelumnya"]: "-",
		["JAN"]: "0",
		["FEB"]: "0",
		["MAR"]: "0",
		["APR"]: "0",
		["MEI"]: "0",
		["JUN"]: "0",
		["JUL"]: "0",
		["AGU"]: "0",
		["SEP"]: "0",
		["OKT"]: "0",
		["NOV"]: "0",
		["DES"]: "0",
		["YTD"]: "0",
	},
];

const columnHelper = createColumnHelper<Person>();

export default function ManPower() {
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
			<TableHeader style={{ backgroundColor: "#BFD9FF" }}>Man Power</TableHeader>
			<MigrateTable data={defaultDataTable} columns={columns} />
		</LayoutTable>
	);
}
