import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import { TitleText, WrapperTitle } from "../../styles";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Material Code"]: "-",
		["Tanggal"]: "-",
		["Shift"]: "-",
		["Loader"]: "-",
		["Operation No"]: "-",
		["Lokasi"]: "-",
		["Jarak"]: "-",
		["Code Unit"]: "-",
		["Vesel Cap"]: "-",
		["Rit"]: "-",
		["Produksi"]: "-",
		["Total Produksi"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function Hpr() {
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
			<WrapperTitle>
				<TitleText>Moco Report HPR</TitleText>
			</WrapperTitle>
			<TopFilter />
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
