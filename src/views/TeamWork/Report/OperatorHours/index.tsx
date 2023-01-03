import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { StyledSpan } from "./styles";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import DataDetail from "./DataDetail";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";
import MigrateTable from "src/components/organism/MigrateTable";

interface Person {
	[x: string]: any;
}

const columnHelper = createColumnHelper<Person>()

export const defaultDataTable = new Array(10).fill(0).map(() => {
	return {
		["NRP"]: "HD787",
		["Name"]: "Hd123",
		["Date"]: `331`,
		["Posisi"]: "2022-17-08",
		["Grade"]: "2022-17-08",
		["Join Date"]: "2022-17-08 02:12:12",
		["Masa Kerja"]: "2022-17-08 02:12:12",
		["ATR YTD"]: "2022-17-08 02:12:12",
		["Indisipliner"]: "2022-17-08 02:12:12",
		["ATD"]: "2022-17-08 02:12:12",
		["ACC"]: "2022-17-08 02:12:12",
		["Versaliti Readines"]: "2022-17-08 02:12:12",
		["Remark"]: "2022-17-08 02:12:12",
	};
});

export default function OperatorHours() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
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
		footer: info => info.column.id,
	})
	)

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
