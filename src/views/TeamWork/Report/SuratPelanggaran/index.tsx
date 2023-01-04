import { Grid, Lozenge } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import ShowDetail from "./ShowDetail";
import RevisiDropdown from "atoms/RevisiDropdown";
import TopFilter from "src/components/organism/TopFilter";
import { IcEye } from "atoms/Icon";
import { colors } from "utils/styles";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	[x: string]: any;
}

const arr = new Array(100).fill(0);
export const defaultDataTable = arr.map((_, index) => {
	return {
		["Waktu Kejadian"]: "2022-10-12||10.30",
		["NRP"]: "Hd123",
		["Nama"]: `33${index}`,
		["Posisi"]: "Sayap kanan",
		["Sanksi"]: "ee gak tau",
		["Jenis"]: "2022-17-08 02:12:12",
		["Status"]: "AKTIF",
		["Detail"]: "2022-17-08 02:12:12",
	};
});

const columnHelper = createColumnHelper<IProps>();

export default function SuratPelanggaran() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const renderText = (type: any) => {
		if (type.column.id === "Detail") {
			return (
				<Grid container justifyContent="center" gap={30}>
					<IcEye
						width={20}
						style={{ cursor: "pointer" }}
						onClick={handleShowDetail}
						color={colors.primary}
					/>
				</Grid>
			);
		} else if (type.column.id === "Status") {
			return <Lozenge label={type.renderValue()} variant="black-strong" />;
		} else {
			return type.renderValue();
		}
	};

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => renderText(info),
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
			<LayoutTable style={{ marginTop: "10px" }}>
				<TitleText>Surat Pelanggaran</TitleText>
			</LayoutTable>
			<TopFilter noDate={true}>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Loader" />
				</Grid>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Loader" />
				</Grid>
			</TopFilter>

			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
