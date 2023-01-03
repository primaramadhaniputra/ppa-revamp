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
		["CN"]: "H57033",
		["Cycle"]: "45",
		["Pld(ton)"]: "90,6",
		["EST(min)"]: "1,3",
		["ES(km/h)"]: "22",
		["LS(km/h)"]: "17",
		["Speed(km/h)"]: "19,5",
		["EDT(min)"]: "9,1",
		["LDT(min)"]: "11,5",
		["LST(min)"]: "11,5",
		["LT(min)"]: "11,5",
		["CT(min)"]: "11,5",
		["LDD(km)"]: "11,5",
		["Prod(BCM)"]: "11,5",
		["Prdty(BCM/h)"]: "11,5",
		["TF"]: "11,5",
	};
});

const columnHelper = createColumnHelper<Person>()

export default function All() {
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
