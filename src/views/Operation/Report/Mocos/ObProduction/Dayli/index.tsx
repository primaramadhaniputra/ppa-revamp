import { Grid, Text } from "@hudoro/neron";
import React, { useMemo } from "react";
import { fontWeights } from "utils/styles";
import { SingleStatus, StatusContainer, Wrapper } from "./styles";
import { createColumnHelper } from "@tanstack/react-table";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["LOADER"]: "",
		["BL"]: "",
		["DW"]: ``,
		["MUD 100%"]: "",
		["MUD CAIR"]: "",
		["MUD ORI 1"]: "",
		["MUD ORI"]: "",
		["OB"]: "",
		["SOIL"]: "",
		["TOTAL"]: "",
		["PLAN"]: "",
		["ACH"]: "",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function Dayli() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => info.renderValue(),
			footer: (info) => info.column.id,
		}),
	);

	return (
		<Wrapper>
			<Grid
				container
				gap={20}
				justifyContent="space-between"
				alignItems="center"
				style={{ margin: "30px 0" }}
			>
				<Text variant="h4" style={{ fontWeight: fontWeights.semi }}>
					Operation / Report
				</Text>
			</Grid>
			<StatusContainer style={{ margin: "30px  0 40px 0" }}>
				<SingleStatus>
					<Text variant="h4">PLAN</Text>
					<Text variant="p">0,00</Text>
				</SingleStatus>
				<SingleStatus container gap={10} flexDirection="column" alignItems="center">
					<Text variant="h4">TOTAL TC</Text>
					<Text variant="p">281.203,75</Text>
				</SingleStatus>
				<SingleStatus container gap={10} flexDirection="column" alignItems="center">
					<Text variant="h4">TOTAL JS</Text>
					<Text variant="p">281.203,75</Text>
				</SingleStatus>
				<SingleStatus container gap={10} flexDirection="column" alignItems="center">
					<Text variant="h4">ACHIEVEMENT</Text>
					<Text variant="p">Infinity %</Text>
				</SingleStatus>
			</StatusContainer>
			<MigrateTable data={defaultDataTable} columns={columns} />
		</Wrapper>
	);
}
