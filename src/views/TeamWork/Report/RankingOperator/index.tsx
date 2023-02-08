import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import RevisiDropdown from "atoms/RevisiDropdown";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["NRP"]: "-",
		["Nama"]: "-",
		["Perusahaan"]: "-",
		["Dept"]: "-",
		["Posisi"]: "-",
		["Hiring Date"]: "-	",
		["Masa Kerja(Bulan)"]: "-",
		["Model"]: "-",
		["Loader"]: "-",
		["Material"]: "-",
		["Produktivitas"]: "-",
		["ATR"]: "-",
		["SP"]: "-",
		["P2H"]: "-",
		["Time Sheet"]: "-",
		["Poin Prod"]: "-",
		["Poin ATR"]: "-",
		["Poin SP"]: "-",
		["Poin P2H"]: "-",
		["Poin Time Sheet"]: "-",
		["Total"]: "-",
		["Syarat Masa Kerja"]: "-",
		["Syarat Produktivitas"]: "-",
		["Syarat SP"]: "-",
		["Syarat ATR"]: "-",
		["Pra Syarat"]: "-",
		["Kategori"]: "-",
	};
});

const columnHelper = createColumnHelper<IProps>();

export default function RankingOperator() {
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
			<LayoutTable style={{ marginTop: "10px" }}>
				<TitleText>Ranking Operator</TitleText>
			</LayoutTable>
			<TopFilter>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Ranking" />
				</Grid>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Operator" />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
