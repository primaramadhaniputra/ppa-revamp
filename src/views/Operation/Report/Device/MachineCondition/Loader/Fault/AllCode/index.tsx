import { Grid, ISelectItem, Select } from "@hudoro/neron";
import React from "react";
import TopFilter from "src/components/organism/TopFilter";
import { TitleText, Wrapper, WrapperTable, WrapperTitle } from "../../../../styles";
import Chart from "./Chart";
import RevisiDropdown from "atoms/RevisiDropdown";

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

export default function AllCode() {
	const [showChart, setShowChart] = React.useState(false);

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
				<TitleText>All Code</TitleText>
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
					<TopFilter>
						<Grid style={{ minWidth: "200px" }}>
							<RevisiDropdown placeholder="Operator" />
						</Grid>
					</TopFilter>
					<WrapperTable>''</WrapperTable>
				</>
			)}
		</>
	);
}
