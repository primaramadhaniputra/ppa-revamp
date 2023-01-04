import { Grid, ISelectItem, Select } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import { TitleText, Wrapper, WrapperTitle } from "../../../../styles";
import Chart from "./Chart";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["CN"]: "E52015",
		["From Tanggal"]: "2022-09-25 06:39:40",
		["To Tanggal"]: "2022-09-25 06:39:40",
		["From SMR"]: "13489",
		["To SMR"]: "13489",
		["Reserve"]: "1",
		["Count"]: "1",
	};
});

const items = [
	{
		id: "1",
		label: "Table",
		values: "Table",
	},
	{
		id: "2",
		label: "Chart",
		values: "Chart",
	},
];

const columnHelper = createColumnHelper<Person>();

export default function KeyOn() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [showChart, setShowChart] = React.useState(false);

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => info.renderValue(),
			footer: (info) => info.column.id,
		}),
	);

	const handleShowChart = (value: ISelectItem | ISelectItem[] | null) => {
		if (value?.values === "Table") {
			setShowChart(false);
		} else {
			setShowChart(true);
		}
	};

	return (
		<>
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>KEY ON</TitleText>
			</WrapperTitle>
			<Grid container alignItems="center">
				<Select
					placeholder="Table"
					items={items}
					defaultValue={items[0]}
					onChange={handleShowChart}
				/>
			</Grid>
			<TopFilter />
			{showChart ? (
				<Wrapper>
					<Chart />
				</Wrapper>
			) : (
				<LayoutTable>
					<MigrateTable data={defaultDataTable} columns={columns} />
				</LayoutTable>
			)}
		</>
	);
}
