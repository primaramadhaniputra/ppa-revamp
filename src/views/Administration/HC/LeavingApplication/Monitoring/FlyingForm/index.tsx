import { fontFamilies, Grid } from "@hudoro/neron";
import TextBetween from "molecules/TextBetween";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { RightText } from "./styles";

const dummyData = [
	{
		title: "TANGGAL",
		desc: "2022-12-01 - 2022-12-20",
	},
	{
		title: "NRP",
		desc: "08102201",
	},
	{
		title: "NAMA",
		desc: "HADRAEN",
	},
	{
		title: "PERUSAHAAN",
		desc: "PPAAC",
	},
	{
		title: "DEPT",
		desc: "PAC",
	},
	{
		title: "POSISI",
		desc: "ADMIN PPAA",
	},
];

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

export default function FlyingForm({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	return (
		<LayoutOverlayData
			isShowDetail={isShowDetail}
			setIsShowDetail={setIsShowDetail}
			formPosition={formPosition}
			title="KT08/HCG/2211/CUTI/00866"
			button={false}
		>
			<TextBetween dummyData={dummyData} />
			<RightText style={{ margin: "30px 0 10px" }}>ROSTER :</RightText>
			<Grid>
				<table style={{ width: "100%", fontSize: "12px", fontFamily: fontFamilies.poppins }}>
					<thead style={{ borderBottom: "2px solid black", borderTop: "2px solid black" }}>
						<tr role="row">
							<th rowSpan={1} colSpan={1} style={{ padding: "10px 0" }}>
								Tanggal
							</th>
							<th rowSpan={1} colSpan={1} style={{ padding: "10px 0" }}>
								Kode
							</th>
						</tr>
					</thead>
					<tbody>
						<tr style={{ textAlign: "center" }}>
							<td valign="top" colSpan={7} style={{ padding: 10 }}>
								No data available in table
							</td>
						</tr>
					</tbody>
				</table>
			</Grid>
			<RightText style={{ margin: "30px 0 10px" }}>SS6 :</RightText>
			<Grid>
				<table style={{ width: "100%", fontSize: "12px", fontFamily: fontFamilies.poppins }}>
					<thead style={{ borderBottom: "2px solid black", borderTop: "2px solid black" }}>
						<tr role="row">
							<th rowSpan={1} colSpan={1} style={{ padding: "10px 0" }}>
								Tgl.Berangkat
							</th>
							<th rowSpan={1} colSpan={1} style={{ padding: "10px 0" }}>
								Tgl.Kembali
							</th>
							<th rowSpan={1} colSpan={1} style={{ padding: "10px 0" }}>
								Status
							</th>
						</tr>
					</thead>
					<tbody>
						<tr style={{ textAlign: "center" }}>
							<td valign="top" colSpan={7} style={{ padding: 10 }}>
								No data available in table
							</td>
						</tr>
					</tbody>
				</table>
			</Grid>
		</LayoutOverlayData>
	);
}
