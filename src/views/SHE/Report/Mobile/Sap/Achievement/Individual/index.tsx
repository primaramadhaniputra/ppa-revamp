import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import { TitleText } from "../../../styles";
import { Grid, Text } from "@hudoro/neron";
import RevisiDropdown from "atoms/RevisiDropdown";
import { colors, fontWeights } from "utils/styles";
import DataDetail from "./DataDetail";
import LayoutTable from "src/components/layouts/LayoutTable";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["NO"]: "-",
		["TGL PELAPORAN"]: "-",
		["PELAPOR"]: "-",
		["KATEGORI"]: "-",
		["DESKRIPSI"]: "-",
		["LOKASI"]: "-",
		["DETAIL LOKASI"]: "-",
		["DEPT"]: "-",
		["PIC EMP"]: "-",
		["STATUS PELAPORAN"]: "-",
		["ACH"]: "",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function Individual() {
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
				return info.column.id === "ACH" ? (
					<Grid container alignItems="center" justifyContent="center" gap={7}>
						<Text
							variant="h4"
							onClick={handleShowDetail}
							style={{
								color: colors.blue,
								cursor: "pointer",
								fontWeight: fontWeights.extraBold,
							}}
						>
							100%
						</Text>
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
				<TitleText>ACHIEVEMENT SAP</TitleText>
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
