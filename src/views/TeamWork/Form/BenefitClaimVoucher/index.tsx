import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { IcImage } from "atoms/Icon";
import FormImage from "./FormImage";
import { colors } from "utils/styles";
import ShowDetail from "./ShowDetail";
import LayoutTable from "src/components/layouts/LayoutTable";
import TitleText from "atoms/TitleText";
import { Grid } from "@hudoro/neron";
import ButtonFile from "atoms/ButtonFile";
import MigrateTable from "src/components/organism/MigrateTable";

interface Person {
	[x: string]: any;
}
export const defaultDataTable = new Array(10).fill(0).map(() => {
	return {
		["Perusahaan"]: "-",
		["Approver"]: "-",
		["Status item"]: "-",
		["Tgl Claim"]: "-",
		["Tgl Kwitansi"]: "-",
		["No Claim"]: "-",
		["No Item"]: "-",
		["Employee"]: "-",
		["Jabatan"]: "-",
		["Dept"]: "-",
		["Nama Pasien"]: "-",
		["Kode hub"]: "-",
		["Kode Klaim"]: "-",
		["Jumlah(RP)"]: "-",
		["File"]: "-",
		["Vendor"]: "-",
		["Modified Date"]: "-",
		["Transferred Date"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function BenefitClaimVoucher() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [isImage, setIsImage] = React.useState(false);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const handleImage = () => {
		setIsImage(!isImage);
	};

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => {
				return item === "File" ? (
					<IcImage
						width={20}
						style={{ cursor: "pointer" }}
						onClick={handleImage}
						color={colors.blue}
					/>
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
			{isImage && <FormImage onclick={handleImage} />}
			<LayoutTable style={{ marginTop: "10px" }}>
				<Grid container alignItems="center" justifyContent="space-between">
					<TitleText>Benefit Claim Voucher(BCV)</TitleText>
					<ButtonFile title={"Add Claim"} onClick={handleShowDetail as any} />
				</Grid>
			</LayoutTable>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
