import { Grid, Text } from "@hudoro/neron";
import React, { useMemo } from "react";
import { fontWeights } from "utils/styles";
import { createColumnHelper } from "@tanstack/react-table";
import DateText from "atoms/DateText";
import MigrateTable from "src/components/organism/MigrateTable";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = [
	{
		Bulan: "-",
		D: `-`,
		N: `-`,
		IO: "-",
		C: "-",
		O: "-",
		T: "-",
		P: "-",
		S: "-",
		I: "-",
		A: "-",
		K: "-",
		["-"]: "100%",
	},
];

const columnHelper = createColumnHelper<Person>();

export default function YTD() {
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
			<Grid
				container
				gap={10}
				alignItems="center"
				justifyContent="space-between"
				style={{ margin: "15px 0", width: "100%" }}
			>
				<Text variant="h4" style={{ fontWeight: fontWeights.bold, fontSize: "15px" }}>
					YTD Personel
				</Text>
				<DateText />
			</Grid>
			<MigrateTable data={defaultDataTable} columns={columns} />
		</>
	);
}
