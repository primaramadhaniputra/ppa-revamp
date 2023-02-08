import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TopFilter from "src/components/organism/TopFilter";
import ShowDetail from "./ShowDetail";
import { IcEye } from "atoms/Icon";
import { colors } from "utils/styles";
import RevisiDropdown from "atoms/RevisiDropdown";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		NRP: "-",
		Nama: "-",
		Posisi: `-`,
		Status: "-",
		Out: "-",
		Dept: "-",
		["Jenis Izin"]: "-",
		Berangkat: "-",
		Kembali: "-",
		["Total Izin"]: "-",
		Approval: "-",
		Detail: "",
	};
});

const columnHelper = createColumnHelper<IProps>();

export default function Izin() {
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
			cell: (info) =>
				info.column.id === "Detail" ? (
					<Grid container justifyContent="center" style={{ padding: "3px 0", borderRadius: 3 }}>
						<IcEye
							style={{ cursor: "pointer" }}
							width={20}
							onClick={handleShowDetail}
							color={colors.blue}
						/>
					</Grid>
				) : (
					info.renderValue()
				),
			footer: (info) => info.column.id,
		}),
	);

	return (
		<>
			<ShowDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<LayoutTable>
				<TitleText>Report Izin</TitleText>
			</LayoutTable>
			<TopFilter>
				<Grid>
					<RevisiDropdown placeholder="Status" />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
