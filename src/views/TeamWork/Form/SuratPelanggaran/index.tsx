import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import IcPrinter from "atoms/Icon/IcPrinter";
import ShowDetail from "./ShowDetail";
import TabV2 from "molecules/TabV2";
import { IcEye } from "atoms/Icon";
import { colors } from "utils/styles";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";
import ButtonFile from "atoms/ButtonFile";
import ShowFormPelanggaran from "./ShowFormPelanggaran";
import MigrateTable from "src/components/organism/MigrateTable";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = new Array(10).fill(0).map(() => {
	return {
		["No"]: "-",
		["Date"]: "-",
		["NRP"]: `-`,
		["Name"]: "-",
		["Posisi"]: "-",
		["Jenis"]: "-",
		["Tempat"]: "-",
		["Action"]: "-",
	};
});

const tabTitle = [
	"Sanksi Teguran",
	"Sanksi Peringatan Pertama",
	"Sanksi Peringatan Kedua",
	"Sanksi Peringatan Terakhir",
];

const columnHelper = createColumnHelper<Person>();

export default function SuratPelanggaran() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [activeTab, setActiveTab] = React.useState(0);

	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const [isShowForm, setIsShowForm] = React.useState(false);
	const [formPelanggaranPosition, setformPelanggaranPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const handleShowFormPelanggaran = (target: { pageY: number; clientY: number }) => {
		setIsShowForm(true);
		setformPelanggaranPosition(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => {
				return item === "Action" ? (
					<Grid container justifyContent="center" gap={10}>
						<IcPrinter
							width={20}
							color={colors.blue}
							style={{ cursor: "pointer" }}
							onClick={() => window.print()}
						/>
						<IcEye
							width={20}
							color={colors.blue}
							style={{ cursor: "pointer" }}
							onClick={handleShowDetail}
						/>
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
			<ShowDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<ShowFormPelanggaran
				isShowDetail={isShowForm}
				setIsShowDetail={setIsShowForm}
				formPosition={formPelanggaranPosition}
			/>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			<LayoutTable>
				<Grid
					container
					alignItems="center"
					justifyContent="space-between"
					onClick={handleShowFormPelanggaran}
				>
					<TitleText> Data Pelanggaran Aktif Karyawan</TitleText>
					<ButtonFile title="INPUT" />
				</Grid>
			</LayoutTable>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
