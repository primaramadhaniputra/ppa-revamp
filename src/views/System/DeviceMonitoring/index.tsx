import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import StyledDropdownMenu from "molecules/StyledDropdownMenu";
import { Grid } from "@hudoro/neron";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = new Array(10).fill(0).map(() => {
	return {
		Tanggal: "HD787",
		NRP: "Hd123",
		Nama: `33`,
		Posisi: "2022-17-08",
		Status: "2022-17-08",
		Time: "2022-17-08 02:12:12",
		Mac: "2022-17-08 02:12:12",
	};
});

const data = ["a", "b", "c"];

const columnHelper = createColumnHelper<Person>()

export default function DeviceMonitoring() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [activeDropDown, setactiveDropDown] = React.useState([]);

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	})
	)

	return (
		<>
			<TopFilter>
				<Grid style={{ flex: 1 }} container>
					<StyledDropdownMenu
						title="Status"
						activeDropdown={activeDropDown}
						setActiveDropdown={setactiveDropDown}
						data={data}
					/>
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
