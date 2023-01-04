import React, { useMemo, useState } from "react";
import { TableWrapper, Wrapper } from "./styles";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import TabV4 from "molecules/TabV4";
import { Grid } from "@hudoro/neron";
import RevisiDropdown from "atoms/RevisiDropdown";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const tabText = ["Operator", "Pengawas"];

interface IProps {
	[x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map((_, index) => {
	return {
		NRP: "HD787",
		Name: "Hd123",
		Perusahaan: `33${index}`,
		Dept: "2022-17-08",
		Posisi: "2022-17-08",
		Checkin: "2022-17-08 02:12:12",
		P2H: "2022-17-08 02:12:12",
		Achievement: "2022-17-08 02:12:12",
	};
});

const columnHelper = createColumnHelper<IProps>();

export default function Achievement() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [activeTab, setActiveTab] = useState(0);

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => info.renderValue(),
			footer: (info) => info.column.id,
		}),
	);

	return (
		<Wrapper>
			<TabV4 tabText={tabText} activeTab={activeTab} setActiveTab={setActiveTab} />
			<TableWrapper>
				<TopFilter>
					<Grid style={{ minWidth: "200px" }}>
						<RevisiDropdown placeholder="Operator" />
					</Grid>
				</TopFilter>
				<LayoutTable>
					<MigrateTable data={defaultDataTable} columns={columns} />
				</LayoutTable>
			</TableWrapper>
		</Wrapper>
	);
}
