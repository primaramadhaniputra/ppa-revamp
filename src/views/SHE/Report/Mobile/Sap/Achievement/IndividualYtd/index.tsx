import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { TitleText } from "../../../styles";
import LayoutTable from "src/components/layouts/LayoutTable";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

export const defaultDataTable = [
	{
		["No"]: "-",
		["Report"]: "-",
		["Target"]: "-",
		["Actual"]: "-",
	},
];

const columnHelper = createColumnHelper<Person>();

export default function IndividualYtd() {
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
				<TitleText>ACH Individual This Year</TitleText>
			</LayoutTable>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
