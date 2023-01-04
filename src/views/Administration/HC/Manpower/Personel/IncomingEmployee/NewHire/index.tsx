import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["NIK KTP"]: "",
		["NAMA"]: "",
		["GENDER"]: "",
		["TTL"]: "",
		["PENDIDIKAN"]: "",
		["NO HP"]: "",
		["DETAIL"]: "",
	};
});

const columnHelper = createColumnHelper<Person>()

export default function NewHire() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	})
	)
		;
	return (
		<>
			<MigrateTable data={defaultDataTable} columns={columns} />
		</>
	);
}
