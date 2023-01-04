import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { WrapperTitle } from "../../styles";
import TitleText from "atoms/TitleText";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Date"]: "",
		["Status"]: "",
		["Name"]: "",
		["Origin"]: "",
		["Destination"]: "",
		["Departure"]: "",
		["Arrival"]: "",
		["Airline"]: "",
		["Phone"]: "",
		["POH"]: "",
		["Position"]: "",
		["Mess"]: "",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function ReportTicket() {
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
			<WrapperTitle>
				<TitleText>Travel</TitleText>
			</WrapperTitle>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
