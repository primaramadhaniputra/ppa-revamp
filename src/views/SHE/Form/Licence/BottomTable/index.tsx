import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	[x: string]: any;
}

export const defaultDataTable = [
	{
		["TGL INPUT"]: "-",
		["NRP"]: "-",
		["GOL DARAH"]: "-",
		["NAMA"]: "-",
		["DEPT"]: "-",
		["POSISI"]: "-",
		["PERUSAHAAN"]: "-",
	},
];

const columnHelper = createColumnHelper<IProps>();

export default function BottomTable() {
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
			<MigrateTable data={defaultDataTable} columns={columns} />
		</>
	);
}
