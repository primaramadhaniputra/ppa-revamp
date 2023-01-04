import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { TitleText, WrapperTitle } from "../../../styles";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Location"]: "",
		["MP"]: "",
		["D"]: "",
		["N"]: "",
		["O"]: "",
		["DI"]: "",
		["NI"]: "",
		["RB"]: "",
		["RL"]: "",
		["RD"]: "",
		["Total"]: "",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function Mess() {
	const objTitle = Object.keys(defaultDataTable.map((item) => item)[0]);
	objTitle.sort((a, b) => {
		if (a === "Location" || b === "Total") {
			return -1;
		}
		if (a === "Total" || b === "Location") {
			return 1;
		}
		return +a - +b;
	});

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => info.renderValue(),
			footer: (info) => info.column.id,
		}),
	);

	return (
		<>
			<WrapperTitle style={{ width: "max-content", boxShadow: "0 1px 3px rgba(0,0,0,.25)" }}>
				<TitleText style={{ fontSize: "16px" }}>MESS</TitleText>
			</WrapperTitle>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
