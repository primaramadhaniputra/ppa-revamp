import { Grid, ISelectItem, Select } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import { TitleText, Wrapper, WrapperTitle } from "../../styles";
import Chart from "./Chart";
import StyledDropdownMenu from "molecules/StyledDropdownMenu";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["CN"]: "-",
		["MOHH"]: "-",
		["HM Start"]: "-",
		["HM Stop"]: "-",
		["HM Total"]: "-",
		["HM Mng"]: "-",
		["HM Pit"]: "-",
		["HM Diff"]: "-",
		["Downtime"]: "-",
		["Delivered"]: "-",
		["Plan PA"]: "-",
		["PA"]: "-",
		["UA"]: "-",
		["Plan MTBF"]: "-",
		["MTBF"]: "-",
		["Plan MTTR"]: "-",
		["MTTR"]: "-",
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

export default function PhysicalAvailability() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [showChart, setShowChart] = React.useState(false);
	const [activeShiftDropDown, setActiveShiftDropDown] = React.useState([]);

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
				<TitleText> Physical Availability</TitleText>
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
					<TopFilter>
						<Grid>
							<StyledDropdownMenu
								title="Model"
								data={[1, 2]}
								activeDropdown={activeShiftDropDown}
								setActiveDropdown={setActiveShiftDropDown}
							/>
						</Grid>
					</TopFilter>
					<LayoutTable>
						<MigrateTable data={defaultDataTable} columns={columns} />
					</LayoutTable>
				</>
			)}
		</>
	);
}
