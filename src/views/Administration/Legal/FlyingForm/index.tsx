import { Grid, Text } from "@hudoro/neron";
import TextBetween from "molecules/TextBetween";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

const dummyTextPersetujuan = [
	{
		title: 'MASA BERLAKU',
		desc: '2022-08-17 - 2022-10-24'
	},
	{
		title: 'CATATAN PERSETUJUAN',
		desc: 'Banana'
	},
]
const dummyText = [
	{
		title: 'NO. DOKUMEN',
		desc: 'Doc123'
	},
	{
		title: 'NAMA DOKUMEN',
		desc: 'perjanjian'
	},
	{
		title: 'DITERIMA DARI/PELANGGAN',
		desc: 'abn'
	},
	{
		title: 'SUMBER DOKUMEN',
		desc: 'Pelanggan'
	},
	{
		title: 'PERMOHONAN',
		desc: ''
	},
	{
		title: 'URAIAN',
		desc: 'test lagi'
	},
	{
		title: 'URAIAN',
		desc: 'test lagi'
	},
	{
		title: 'PERUNTUKAN',
		desc: 'Internal'
	},
	{
		title: 'CATATAN PERMOHONAN',
		desc: 'test input'
	},
]

export default function FlyingForm({ isShowDetail, setIsShowDetail, formPosition }: IProps) {

	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
				title="PERMOHONAN AKSES"
			>
				<Grid style={{ padding: "0 10px" }}>
					<TextBetween dummyData={dummyText} maxLabelWidth='210px' />
				</Grid>
				<Grid style={{ padding: " 20px 10px", marginTop: '40px', borderTop: '1px solid black', borderBottom: '1px solid black' }}>
					<Text variant="h4" style={{ textAlign: 'center', marginBottom: '30px' }}>Persetujuan</Text>
					<TextBetween dummyData={dummyTextPersetujuan} maxLabelWidth='210px' />
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
