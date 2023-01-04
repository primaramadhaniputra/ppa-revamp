import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { TitleText, WrapperTitle } from "../styles";
import { IcEye } from "atoms/Icon";
import { colors } from "utils/styles";
import FlyingForm from "./FlyingForm";
import TitlePage from "atoms/TitlePage";
import StyledButton from "atoms/StyledButton";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Jenis"]: "",
		["Nama Dokumen"]: "",
		["Tanggal Pengajuan"]: "",
		["Overall Proccess"]: "",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function HistoryGradeAndPost() {
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
				info.column.id === "Overall Proccess" ? (
					<IcEye width={16} color={colors.blue} cursor="pointer" onClick={handleShowDetail} />
				) : (
					info.getValue()
				),
			footer: (info) => info.column.id,
		}),
	);

	return (
		<>
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				Administration / Legal
			</TitlePage>
			<WrapperTitle>
				<TitleText>📃 Permohonan Dokumen</TitleText>
				<Grid container>
					<StyledButton>📄 Buat Permohonan</StyledButton>
				</Grid>
			</WrapperTitle>
			<FlyingForm
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
