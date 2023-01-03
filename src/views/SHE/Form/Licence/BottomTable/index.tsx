import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	[x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["TGL INPUT"]: "31-08-2022",
		["NRP"]: "0123955",
		["GOL DARAH"]: "O",
		["NAMA"]: "MISTIADI",
		["DEPT"]: "HCG",
		["POSISI"]: "DRIVER LV",
		["PERUSAHAAN"]: "SPA",
	};
});

const columnHelper = createColumnHelper<IProps>()

export default function BottomTable() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	})
	)

	return (
		<>
			<MigrateTable data={defaultDataTable} columns={columns} />
		</>
	);
}
