import { Grid } from "@hudoro/neron";
import React from "react";
import { fontWeights } from "utils/styles";
import { TitleText, WrapperTable, WrapperTitle } from "../styles";
import BottomTable from "./BottomTable";
import TopTable from "./TopTable";

const ket = [
	{
		title: "MP",
		desc: "Manpower",
	},
	{
		title: "FAI",
		desc: "First Aid Injury",
	},
	{
		title: "LTI",
		desc: "Lost Time Injury",
	},
	{
		title: "FTL",
		desc: "Fatal",
	},
	{
		title: "PDM",
		desc: "Property Damage",
	},
	{
		title: "NMS",
		desc: "Near Miss",
	},
	{
		title: "MTI",
		desc: "Medical Treatment",
	},
	{
		title: "FC",
		desc: "Fire Case",
	},
];

export default function Insiden() {
	return (
		<>
			<WrapperTitle>
				<TitleText>Insiden</TitleText>
			</WrapperTitle>
			<WrapperTable style={{ marginTop: "20px" }}>
				<TitleText style={{ fontSize: "15px", textAlign: "center" }}>Summary Insiden</TitleText>
				<TopTable />
				<Grid>
					<TitleText
						style={{
							fontSize: "14px",
							fontWeight: fontWeights.medium,
							textDecoration: "underline",
							marginBottom: "10px",
						}}
					>
						Keterangan
					</TitleText>
					{ket.map((item, index) => (
						<Grid container gap={5} key={index} style={{ marginBottom: "5px" }}>
							<TitleText style={{ fontSize: "14px", fontWeight: fontWeights.medium }}>
								{item.title}
							</TitleText>
							<TitleText style={{ fontSize: "14px", fontWeight: fontWeights.regular }}>
								: {item.desc}
							</TitleText>
						</Grid>
					))}
				</Grid>
			</WrapperTable>
			<WrapperTable style={{ marginTop: "20px" }}>
				<BottomTable />
			</WrapperTable>
		</>
	);
}
