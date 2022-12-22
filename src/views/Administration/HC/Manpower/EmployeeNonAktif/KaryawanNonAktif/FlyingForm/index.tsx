import { Grid } from "@hudoro/neron";
import TextBetween from "molecules/TextBetween";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

const data = [
	{
		title: "",
		desc: "",
	},
	{
		title: "NRP",
		desc: "20000104",
	},
	{
		title: "Nama",
		desc: "ALHAM SISWANTO",
	},
	{
		title: "No KTP",
		desc: " 6402020308890001",
	},
	{
		title: "TTL",
		desc: "LOA KULU, 03-08-1989",
	},
	{
		title: "Posisi",
		desc: " SECURITY",
	},
	{
		title: "Dept.",
		desc: " HCG",
	},
	{
		title: "Grade",
		desc: "1A",
	},
	{
		title: "Tanggal Masuk",
		desc: "03-01-2020",
	},
	{
		title: "Keluar",
		desc: "31-12-2022",
	},
	{
		title: "No HP",
		desc: "085346554154",
	},
	{
		title: "Status",
		desc: "KONTRAK 3",
	},
	{
		title: "NPWP",
		desc: "  97.721.297.6-728.000",
	},
	{
		title: "BPJS TK",
		desc: "12026718051",
	},
	{
		title: "DATA BANK",
		desc: " MANDIRI || 1480017137384 || ALHAM SISWANTO",
	},
	{
		title: "Email",
		desc: " SISWANTOALHAM@GMAIL.COM",
	},
	{
		title: "Alamat",
		desc: " JEMBAYAN RT 01 JEMBAYAN LOA KULU KUTAI KARTANEGARA KALIMANTAN TIMUR",
	},
	{
		title: "Keterangan",
		desc: "Diakhiri Kontrak - Lanjut Alih Daya",
	},
];

export default function FlyingForm({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	return (
		<LayoutOverlayData
			isShowDetail={isShowDetail}
			setIsShowDetail={setIsShowDetail}
			formPosition={formPosition}
			title="DETAIL KARYAWAN NON-AKTIF"
			button={true}
		>
			<Grid>
				<TextBetween dummyData={data} />
			</Grid>
		</LayoutOverlayData>
	);
}
