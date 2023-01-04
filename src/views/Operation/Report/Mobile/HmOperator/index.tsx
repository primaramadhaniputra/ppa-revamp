import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import RevisiDropdown from "atoms/RevisiDropdown";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Date"]: "2022-09-30",
		["Shift"]: "D",
		["NRP"]: "1231231",
		["Name"]: "RUDI KURNIA LUGAS",
		["Dept"]: "HCG",
		["Unit"]: "AMM01",
		["HM Start"]: "100715.00",
		["HM Stop"]: "100715.00",
		["HM"]: "56.00",
		["Activity"]: "Non PPA Non Fleet",
		["Parking"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function HmOperator() {
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
				<TitleText>REPORT HM OPERATOR</TitleText>
			</LayoutTable>
			<TopFilter>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Loader" />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
