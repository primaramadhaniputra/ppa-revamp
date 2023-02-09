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
		["CN"]: "-",
		["Cycle"]: "-",
		["Pld(ton)"]: "-",
		["EST(min)"]: "-",
		["ES(km/h)"]: "-",
		["LS(km/h)"]: "-",
		["Speed(km/h)"]: "-",
		["EDT(min)"]: "-",
		["LDT(min)"]: "-",
		["LST(min)"]: "-",
		["LT(min)"]: "-",
		["CT(min)"]: "-",
		["LDD(km)"]: "-",
		["Prod(BCM)"]: "-",
		["Prdty(BCM/h)"]: "-",
		["TF"]: "-",
	},
];

const columnHelper = createColumnHelper<Person>();

export default function All() {
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
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Unit" />
				</Grid>
			</TopFilter>
			<WrapperTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</WrapperTable>
		</>
	);
}
