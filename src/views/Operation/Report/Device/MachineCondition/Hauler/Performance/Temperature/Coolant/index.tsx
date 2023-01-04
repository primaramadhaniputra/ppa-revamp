import { Grid, ISelectItem, Select } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import { TitleText, Wrapper, WrapperTitle } from "../../../../../styles";
import Chart from "./Chart";
import DataDetail from "./DataDetail";
import { TextTable } from "./styles";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	[x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["CN"]: "E52015",
		["Cool Temp,Max(deg C)"]: "127.2",
		["Status"]: "Warning",
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

export default function Coolant() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [showChart, setShowChart] = React.useState(false);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const renderTdText = (type: string, info: IProps) => {
		if (type === "CN") {
			return (
				<TextTable style={{ color: "blue", cursor: "pointer" }} onClick={handleShowDetail}>
					{info.getValue()}
				</TextTable>
			);
		} else if (type === "Status") {
			return (
				<TextTable style={{ backgroundColor: "#FCE168", borderBottom: "1px solid white" }}>
					{info.getValue()}
				</TextTable>
			);
		} else {
			return <TextTable>{info.getValue()}</TextTable>;
		}
	};

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => {
				return renderTdText(info.column.id, info);
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
				<TitleText>Coolant Temp MAX</TitleText>
			</WrapperTitle>
			<Grid container alignItems="center" style={{ maxWidth: "200px", margin: "20px auto" }}>
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
