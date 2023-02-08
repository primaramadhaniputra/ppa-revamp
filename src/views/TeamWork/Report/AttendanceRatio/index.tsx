import { Grid, Text } from "@hudoro/neron";
import React, { useMemo } from "react";
import { fontWeights } from "utils/styles";
import { createColumnHelper } from "@tanstack/react-table";
import TabV2 from "molecules/TabV2";
import RevisiDropdown from "atoms/RevisiDropdown";
import TopFilter from "src/components/organism/TopFilter";
import dynamic from "next/dynamic";
import DateText from "atoms/DateText";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	[x: string]: any;
}

const YTD = dynamic(() => import("./YTD"), { ssr: false });
const Department = dynamic(() => import("./Department"), { ssr: false });

const tabTitle = ["Individual", "Department", "Manpower", "YTD"];

export const defaultDataTable = [
	{
		["Nrp"]: "-",
		["Name"]: "-",
		["Dept"]: "-",
		["Posisi"]: "-",
		["Comp"]: "-",
		["D"]: "-",
		["N"]: "-",
		["IO"]: "-",
		["NC"]: "-",
		["L"]: "-",
		["T"]: "-",
		["O"]: "-",
		["S"]: "-",
		["I"]: "-",
		["A"]: "-",
		["K"]: "-",
		["P"]: "-",
		["R"]: "-",
		["H"]: "-",
		["NR"]: "-",
		["ATR"]: "-",
	},
];

const columnHelper = createColumnHelper<IProps>();

export default function AttendanceRatio() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [activeTabs, setActiveTabs] = React.useState(0);

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => info.renderValue(),
			footer: (info) => info.column.id,
		}),
	);

	const renderTab = () => {
		if (activeTabs === 0) {
			return (
				<>
					<Grid container justifyContent="space-between" gap={10} style={{ margin: "15px 0" }}>
						<Text variant="h4" style={{ fontWeight: fontWeights.semi }}>
							Individual Attendance Ratio
						</Text>
						<DateText />
					</Grid>
					<MigrateTable data={defaultDataTable} columns={columns} />
				</>
			);
		} else if (activeTabs === 1) {
			return <Department />;
		} else if (activeTabs === 2) {
			return <Department />;
		} else {
			return <YTD />;
		}
	};

	return (
		<>
			<TabV2 tabsData={tabTitle} activeTab={activeTabs} setActiveTab={setActiveTabs} />
			<LayoutTable style={{ marginTop: "10px" }}>
				<TitleText>Attendance Ratio</TitleText>
			</LayoutTable>
			<TopFilter>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Loader" />
				</Grid>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Loader" />
				</Grid>
			</TopFilter>
			<LayoutTable>{renderTab()}</LayoutTable>
		</>
	);
}
