import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import { WrapperTable } from "../../styles";
import RevisiDropdown from "atoms/RevisiDropdown";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

export const defaultDataTable = [
	{
		["Date"]: "-",
		["Shift"]: "-",
		["CN"]: "-",
		["Loader"]: "-",
		["Material"]: "-",
		["PIT"]: "-",
		["PLD(ton)"]: "-",
		["EST(min)"]: "-",
		["ES(km/h)"]: "-",
		["LS(km/h)"]: "-",
		["Speed(km/h)"]: "-",
		["EDT(min)"]: "-",
		["LDT(min)"]: "-",
		["LST(min)"]: "-",
		["LT(min)"]: "-",
		["LDD(km)"]: "-",
		["EDD(km)"]: "-",
		["CT(min)"]: "-",
		["Actual Date"]: "-",
	},
];

const columnHelper = createColumnHelper<Person>();

export default function AllByLoader() {
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
					<RevisiDropdown placeholder="Loader" />
				</Grid>
			</TopFilter>
			<WrapperTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</WrapperTable>
		</>
	);
}
