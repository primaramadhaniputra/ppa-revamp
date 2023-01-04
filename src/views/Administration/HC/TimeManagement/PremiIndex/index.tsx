import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import { TitleText, WrapperTitle } from "../../../styles";
import TopFilter from "src/components/organism/TopFilter";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["No"]: "",
		["Tanggal"]: "",
		["NRP"]: "",
		["Nama"]: "",
		["Departemen"]: "",
		["Posisi"]: "",
		["Pos"]: "",
		["Unit"]: "",
		["HM"]: "",
		["WH"]: "",
	};
});

const columnHelper = createColumnHelper<Person>()


export default function PremiIndex() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	})
	);

	return (
		<>
			<WrapperTitle>
				<TitleText>Premi Index</TitleText>
			</WrapperTitle>
			<TopFilter />
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
