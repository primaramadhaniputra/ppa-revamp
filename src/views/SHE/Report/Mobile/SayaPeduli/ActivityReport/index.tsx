import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import { TitleText } from "../../styles";
import { Grid } from "@hudoro/neron";
import RevisiDropdown from "atoms/RevisiDropdown";
import StyledButton from "atoms/StyledButton";
import { colors, fontSizing, fontWeights } from "utils/styles";
import DataDetail from "./DataDetail";
import { IcEye } from "atoms/Icon";
import DataDetailTable from "./DataDetailTable";
import LayoutTable from "src/components/layouts/LayoutTable";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

export const defaultDataTable = [
	{
		["Nrp"]: "-",
		["Name"]: "-",
		["Dept"]: "-",
		["Roster"]: "-",
		["Activity"]: "-",
		["Temp"]: "-",
		["Health"]: "-",
		["Risk"]: "-",
		["Date"]: "-",
		["Action"]: "",
	},
];

const columnHelper = createColumnHelper<Person>();

export default function ActivityReport() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [isShowDetailTable, setIsShowDetailTable] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const handleShowDetailTable = (target: { pageY: number; clientY: number }) => {
		setIsShowDetailTable(true);
		setformPosition(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => {
				return info.column.id === "Action" ? (
					<IcEye width={24} color={colors.blue} cursor="pointer" onClick={handleShowDetailTable} />
				) : (
					info.getValue()
				);
			},
			footer: (info) => info.column.id,
		}),
	);

	return (
		<>
			<DataDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<DataDetailTable
				isShowDetail={isShowDetailTable}
				setIsShowDetail={setIsShowDetailTable}
				formPosition={formPosition}
			/>
			<LayoutTable style={{ marginTop: "10px" }}>
				<Grid container alignItems="center" justifyContent="space-between">
					<TitleText>ACTIVITY REPORT</TitleText>
					<Grid style={{ maxWidth: "150px" }}>
						<StyledButton
							style={{
								backgroundColor: colors.blue,
								fontSize: fontSizing.md.fontSize,
								padding: "5px 0",
								fontWeight: fontWeights.bold,
							}}
							onClick={handleShowDetail}
						>
							Show Cart
						</StyledButton>
					</Grid>
				</Grid>
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
