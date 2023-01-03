import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import RevisiDropdown from "atoms/RevisiDropdown";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	[x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["NRP"]: "120029",
		["Nama"]: "M.Syarif",
		["Perusahaan"]: "AMM",
		["Dept"]: "PRO",
		["Posisi"]: "OPERATOR PC2000",
		["Hiring Date"]: "2017-02-20	",
		["Masa Kerja(Bulan)"]: "67",
		["Model"]: "PC1250-8R",
		["Loader"]: "-",
		["Material"]: "OB",
		["Produktivitas"]: "0.00",
		["ATR"]: "100",
		["SP"]: "0",
		["P2H"]: "100",
		["Time Sheet"]: "50",
		["Poin Prod"]: "50",
		["Poin ATR"]: "50",
		["Poin SP"]: "50",
		["Poin P2H"]: "50",
		["Poin Time Sheet"]: "50",
		["Total"]: "50",
		["Syarat Masa Kerja"]: "1",
		["Syarat Produktivitas"]: "1",
		["Syarat SP"]: "1",
		["Syarat ATR"]: "1",
		["Pra Syarat"]: "3",
		["Kategori"]: "BP",
	};
});

const columnHelper = createColumnHelper<IProps>()

export default function RankingOperator() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	})
	)

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
