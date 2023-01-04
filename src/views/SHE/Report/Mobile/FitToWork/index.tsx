import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import { TitleText } from "../styles";
import { Grid } from "@hudoro/neron";
import RevisiDropdown from "atoms/RevisiDropdown";
import StatusCard from "./StatusCard";
import LayoutTable from "src/components/layouts/LayoutTable";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Tgl Input"]: "",
		["No FTW"]: "",
		["NRP"]: "",
		["Nama"]: "",
		["Jabatan"]: "",
		["Dept"]: "",
		["Shift"]: "",
		["Hari ke"]: "",
		["Job"]: "",
		["Lokasi"]: "",
		["Kondisi"]: "",
		["Obat"]: "",
		["Istirahat"]: "",
		["status"]: "",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function FitToWork() {
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
			<LayoutTable>
				<TitleText>Fit to Work</TitleText>
			</LayoutTable>
			<StatusCard />
			<TopFilter>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Status" />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
