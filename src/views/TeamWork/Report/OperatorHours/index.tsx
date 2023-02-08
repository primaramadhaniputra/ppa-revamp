import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { StyledSpan } from "./styles";
import { createColumnHelper } from "@tanstack/react-table";
import DataDetail from "./DataDetail";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";
import MigrateTable from "src/components/organism/MigrateTable";

interface Person {
	[x: string]: any;
}

const columnHelper = createColumnHelper<Person>();

export const defaultDataTable = [
	{
		["NRP"]: "-",
		["Name"]: "-",
		["Date"]: `-`,
		["Posisi"]: "-",
		["Grade"]: "-",
		["Join Date"]: "-",
		["Masa Kerja"]: "-",
		["ATR YTD"]: "-",
		["Indisipliner"]: "-",
		["ATD"]: "-",
		["ACC"]: "-",
		["Versaliti Readines"]: "-",
		["Remark"]: "-",
	},
];

export default function OperatorHours() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => {
				return item === "Indisipliner" ? (
					<Grid container justifyContent="center">
						<StyledSpan onClick={handleShowDetail} style={{ cursor: "pointer" }}>
							1
						</StyledSpan>
					</Grid>
				) : (
					info.renderValue()
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
			<LayoutTable style={{ marginTop: "10px" }}>
				<TitleText>Operator Hours</TitleText>
			</LayoutTable>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
