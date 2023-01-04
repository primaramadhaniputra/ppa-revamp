import { Grid, Text } from "@hudoro/neron";
import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import { WrapperTable } from "../../../../../styles";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["NRP"]: "",
		["Name"]: "",
		["Dept"]: "",
		["Posisi"]: "",
		["Status Now"]: "",
		["Start"]: "",
		["End"]: "",
		["Action"]: "",
	};
});

const columnHelper = createColumnHelper<Person>()

export default function ListEndContractTable() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	})
	)

	return (
		<>
			<WrapperTable>
				<Text variant="h4" style={{ marginBottom: "20px", textAlign: "center" }}>
					ASSESSMENT LIST END CONTRACT
				</Text>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</WrapperTable>
		</>
	);
}
