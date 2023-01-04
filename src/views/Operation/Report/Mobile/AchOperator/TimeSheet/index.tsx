import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import { PointContainer, PointDesc, PointValue } from "./styles";
import { Grid } from "@hudoro/neron";
import RevisiDropdown from "atoms/RevisiDropdown";
import LayoutTable from "src/components/layouts/LayoutTable";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["NRP"]: "-",
		["Nama"]: "-",
		["Dept"]: "-",
		["Posisi"]: "-",
		["True"]: "-",
		["False"]: "-",
		["Total"]: "-",
		["Ach"]: "-",
		["Point"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function TimeSheet() {
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
			<TopFilter>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Shift" />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<Grid container gap={10} style={{ marginBottom: "15px" }}>
					<PointContainer>
						<PointDesc>Point : 100</PointDesc>
						<PointValue>Istimewa</PointValue>
					</PointContainer>
					<PointContainer>
						<PointDesc>Point : 90</PointDesc>
						<PointValue style={{ backgroundColor: "#605CA8" }}>Baik Sekali</PointValue>
					</PointContainer>
					<PointContainer>
						<PointDesc>Point : 80</PointDesc>
						<PointValue style={{ backgroundColor: "#3C8DBC" }}>Baik</PointValue>
					</PointContainer>
					<PointContainer>
						<PointDesc>Point : 70</PointDesc>
						<PointValue style={{ backgroundColor: "#F39C12" }}>Butuh Perbaikan</PointValue>
					</PointContainer>
				</Grid>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
