import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import { Grid, Icon } from "@hudoro/neron";
import { notify } from "utils/functions";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = new Array(10).fill(0).map(() => {
	return {
		ID: "HD787",
		User: "Hd123",
		Host: `33}`,
		DB: "2022-17-08",
		Command: "2022-17-08",
		Time: "2022-17-08 02:12:12",
		State: "2022-17-08 02:12:12",
		Info: "2022-17-08 02:12:12",
		Action: "",
	};
});

const columnHelper = createColumnHelper<Person>()

export default function Database() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const handleKillProccess = () => {
		if (confirm("are you sure dude")) {
			return notify("okey", "success");
		}
	};

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: (info) => {
			return info.column.id === "Action" ? (
				<Grid
					container
					justifyContent="center"
					style={{ cursor: "pointer" }}
					onClick={handleKillProccess}
				>
					<Icon iconName="IcTrash" size={16} color="red" />
				</Grid>
			) : (
				info.getValue()
			);
		},
		footer: info => info.column.id,
	})
	)

	return (
		<LayoutTable>
			<MigrateTable data={defaultDataTable} columns={columns} />
		</LayoutTable>
	);
}
