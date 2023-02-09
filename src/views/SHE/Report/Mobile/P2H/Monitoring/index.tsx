import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import CardImage from "./CardImage";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	[x: string]: any;
}

export const defaultDataTable = [
	{
		Tanggal: "-",
		Unit: "-",
		["Operator"]: "-",
		Shift: "-",
		P2H: "-",
		Approver: "-",
		["Status APPR"]: "-",
	},
];

const columnHelper = createColumnHelper<IProps>();

export default function Monitoring() {
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
			<CardImage />
			<MigrateTable data={defaultDataTable} columns={columns} />
		</LayoutTable>
	);
}
