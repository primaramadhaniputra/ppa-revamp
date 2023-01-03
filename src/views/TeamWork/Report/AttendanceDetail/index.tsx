import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import RevisiDropdown from "atoms/RevisiDropdown";
import TopFilter from "src/components/organism/TopFilter";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	[x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		NRP: "-",
		Nama: "-",
		Tanggal: `-`,
		In: "-",
		Out: "-",
		Job: "-",
		Dep: "-",
		Company: "-",
		Code: "-",
		Device: "-",
		Owner: "-",
	};
});

const columnHelper = createColumnHelper<IProps>()

export default function AttendanceDetail() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	})
	)

	return (
		<>
			<LayoutTable style={{ marginTop: "10px" }}>
				<TitleText>Attendance Detail</TitleText>
			</LayoutTable>
			<TopFilter>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Dept" />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
