import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import { TitleText, WrapperTitle } from "../../styles";
import StyledDropdownMenu from "molecules/StyledDropdownMenu";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["CN"]: "-",
		["Model"]: "-",
		["Activity"]: "-",
		["HM Start"]: "-",
		["HM Stop"]: "-",
		["HM Total"]: "-",
		["HM Opr"]: "-",
		["HM Pit"]: "-",
		["HM Diff"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function HmMonitoring() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [activeShiftDropDown, setActiveShiftDropDown] = React.useState([]);

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => info.renderValue(),
			footer: (info) => info.column.id,
		}),
	);

	return (
		<>
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>HM Monitoring</TitleText>
			</WrapperTitle>
			<TopFilter>
				<Grid>
					<StyledDropdownMenu
						title="Activity"
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
	);
}
