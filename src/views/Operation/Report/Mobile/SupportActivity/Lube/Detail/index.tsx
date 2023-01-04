import { Grid } from "@hudoro/neron";
import { createColumnHelper } from "@tanstack/react-table";
import RevisiDropdown from "atoms/RevisiDropdown";
import StyledDropdownMenu from "molecules/StyledDropdownMenu";
import React, { useMemo } from "react";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";
import TopFilter from "src/components/organism/TopFilter";
import { Person } from "utils/interfaces";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["CN"]: "-",
		["Model"]: "-",
		["Break Coolant"]: "-",
		["Damper"]: "-",
		["Differential"]: "-",
		["Engine"]: "-",
		["Final Drive"]: "-",
		["Hydroulic"]: "-",
		["Power Take Off"]: "-",
		["Swing Circle"]: "-",
		["Swing Machinery"]: "-",
		["Tandem"]: "-",
		["Transmission"]: "-",
		["Black"]: "-",
		["Total"]: "-",
	};
});

const dataDummy = ["a", "b", "c"];

const columnHelper = createColumnHelper<Person>();

export default function Detail() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [activeDropdown, setActiveDropdown] = React.useState([]);

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => info.renderValue(),
			footer: (info) => info.column.id,
		}),
	);

	return (
		<>
			<TopFilter>
				<Grid style={{ minWidth: "200px" }}>
					<StyledDropdownMenu
						title="Model"
						activeDropdown={activeDropdown}
						setActiveDropdown={setActiveDropdown}
						data={dataDummy}
					/>
				</Grid>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Material" />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
