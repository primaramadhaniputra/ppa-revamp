import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import { Grid } from "@hudoro/neron";
import RevisiDropdown from "atoms/RevisiDropdown";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Nrp"]: "-",
		["Nama"]: "-",
		["Dept"]: "-",
		["Perusahaan"]: "-",
		["Posisi"]: "-",
		["Hari"]: "-",
		["Saya Peduli"]: "-",
		["Ach"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>()

export default function Achievement() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	})
	);

	return (
		<>
			<LayoutTable style={{ marginTop: "10px" }}>
				<TitleText>ACHIEVEMENT REPORT</TitleText>
			</LayoutTable>
			<TopFilter>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Dept" />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
