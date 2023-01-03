import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import { WrapperTable } from "../../styles";
import RevisiDropdown from "atoms/RevisiDropdown";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Date"]: "2022-09-30",
		["Shift"]: "1",
		["CN"]: "H57060",
		["Loader"]: "E52005",
		["Material"]: "BL",
		["PIT"]: "SENTUK 40",
		["PLD(ton)"]: "102.4",
		["EST(min)"]: "1.3",
		["ES(km/h)"]: "24",
		["LS(km/h)"]: "24",
		["Speed(km/h)"]: "24",
		["EDT(min)"]: "8.4",
		["LDT(min)"]: "8.4",
		["LST(min)"]: "0.4",
		["LT(min)"]: "3.40",
		["LDD(km)"]: "3.4",
		["EDD(km)"]: "3.4",
		["CT(min)"]: "23.4",
		["Actual Date"]: "2022-09-30 06:16:05",
	};
});

const columnHelper = createColumnHelper<Person>()

export default function AllByLoader() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	})
	);

	return (
		<>
			<TopFilter>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Loader" />
				</Grid>
			</TopFilter>
			<WrapperTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</WrapperTable>
		</>
	);
}
