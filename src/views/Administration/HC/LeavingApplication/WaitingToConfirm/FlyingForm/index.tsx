import { fontFamilies, Grid } from "@hudoro/neron";
import TextBetween from "molecules/TextBetween";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { RightText } from "./styles";

const dummyData = [
	{
		title: "Name",
		desc: "SANDY FREDYAWAN",
	},
	{
		title: "POH",
		desc: "BALIKPAPAN",
	},
	{
		title: "Position",
		desc: "MECHANIC 3",
	},
	{
		title: "Hiring Date",
		desc: "2018-08-20",
	},
	{
		title: "Date",
		desc: "2022-12-20 to 2023-01-02",
	},
	{
		title: "Status",
		desc: "Approved",
	},
	{
		title: "Leave",
		desc: "Lapangan 14 hari",
	},
	{
		title: "Marital Status",
		desc: "K0",
	},
	{
		title: "Phone",
		desc: "085250354563",
	},
	{
		title: "Address",
		desc: "JL DURIAN RT 03 KELURAHAN BUKUAN KECAMATAN PALARAN SAMARINDA KALIMANTAN TIMUR",
	},
	{
		title: "Leaving Note",
		desc: "Cuti site 14 hari",
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
			button={true}
		>
			<TextBetween dummyData={dummyData} />
			<RightText style={{ margin: "30px 0 10px" }}>Requested Ticket :</RightText>
			<Grid>
				<table style={{ width: "100%", fontSize: "12px", fontFamily: fontFamilies.poppins }}>
					<thead style={{ borderBottom: "2px solid black", borderTop: "2px solid black" }}>
						<tr role="row">
							<th rowSpan={1} colSpan={1} style={{ padding: "10px 0" }}>
								Name
							</th>
							<th rowSpan={1} colSpan={1} style={{ padding: "10px 0" }}>
								Age
							</th>
							<th rowSpan={1} colSpan={1} style={{ padding: "10px 0" }}>
								Ticket for
							</th>
							<th rowSpan={1} colSpan={1} style={{ padding: "10px 0" }}>
								Date
							</th>
							<th rowSpan={1} colSpan={1} style={{ padding: "10px 0" }}>
								From
							</th>
							<th rowSpan={1} colSpan={1} style={{ padding: "10px 0" }}>
								To
							</th>
							<th rowSpan={1} colSpan={1} style={{ padding: "10px 0" }}></th>
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
			<RightText style={{ margin: "30px 0 10px" }}>Airport Travel : :</RightText>
			<Grid>
				<table style={{ width: "100%", fontSize: "12px", fontFamily: fontFamilies.poppins }}>
					<thead style={{ borderBottom: "2px solid black", borderTop: "2px solid black" }}>
						<tr role="row">
							<th rowSpan={1} colSpan={1} style={{ padding: "10px 0" }}>
								Date
							</th>
							<th rowSpan={1} colSpan={1} style={{ padding: "10px 0" }}>
								Destination
							</th>
						</tr>
					</thead>
					<tbody>
						<tr style={{ textAlign: "center" }}>
							<td valign="top" colSpan={2} style={{ padding: 10 }}>
								No data available in table
							</td>
						</tr>
					</tbody>
				</table>
			</Grid>
		</LayoutOverlayData>
	);
}
