import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { TitleText, WrapperTitle } from "../../../styles";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["CN"]: "-",
		["Operator"]: "-",
		["Location"]: "-",
		["Opr Remark"]: "-",
		["Status"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function BreakDownMonitoring() {
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
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>Breakdown Monitoring</TitleText>
			</WrapperTitle>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
