import { Grid, Text } from "@hudoro/neron";
import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import { WrapperTable } from "../../../../styles";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Dept"]: "",
		["Mp"]: "",
		["Kontrak 1"]: "",
		["Kontrak 2"]: "",
		["Kontrak 3"]: "",
		["Permanen"]: "",
		["N/A"]: "",
	};
});

const columnHelper = createColumnHelper<Person>()

export default function SummaryPkwt() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	})
	);

	return (
		<>
			<WrapperTable>
				<Text variant="h4" style={{ fontWeight: 500, marginBottom: "20px" }}>
					Summary Masa PKWT
				</Text>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</WrapperTable>
		</>
	);
}
