import { Grid } from "@hudoro/neron";
import React from "react";
import LayoutTable from "src/components/layouts/LayoutTable";
import { fontWeights } from "utils/styles";
import { TitleText } from "../styles";
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
			<LayoutTable style={{ marginTop: "10px" }}>
				<TitleText>Insiden</TitleText>
			</LayoutTable>
			<LayoutTable>
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
			</LayoutTable>
			<LayoutTable>
				<BottomTable />
			</LayoutTable>
		</>
	);
}
