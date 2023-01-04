import { Grid, ISelectItem, Select } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import { TitleText, Wrapper, WrapperTitle } from "../../../../styles";
import Chart from "./Chart";
import DataDetail from "./DataDetail";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";
import LayoutTable from "src/components/layouts/LayoutTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["CN"]: "E52015",
		["Fuel Consumption Rate L/H"]: "127.2",
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

export default function Fuel() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [showChart, setShowChart] = React.useState(false);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => {
				return info.column.id === "CN" ? (
					<span style={{ color: "blue", cursor: "pointer" }} onClick={handleShowDetail}>
						{info.renderValue()}
					</span>
				) : (
					info.renderValue()
				);
			},
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
			<DataDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>Fuel Consumption Rate</TitleText>
			</WrapperTitle>
			<Grid container alignItems="center">
				<Select
					placeholder="Table"
					items={items}
					defaultValue={items[0]}
					onChange={handleShowChart}
				/>
			</Grid>
			{showChart ? (
				<Wrapper>
					<Chart />
				</Wrapper>
			) : (
				<>
					<TopFilter />
					<LayoutTable>
						<MigrateTable data={defaultDataTable} columns={columns} />
					</LayoutTable>
				</>
			)}
		</>
	);
}
