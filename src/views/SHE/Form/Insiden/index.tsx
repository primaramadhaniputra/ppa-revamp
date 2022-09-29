import { Grid } from "@hudoro/neron";
import React from "react";
import { fontWeights } from "utils/styles";
import { TitleText, WrapperTable, WrapperTitle } from "../styles";
import BottomTable from "./BottomTable";
import TopTable from "./TopTable";

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
					<Grid container gap={20}>
						<TitleText style={{ fontSize: "14px", fontWeight: fontWeights.medium }}>MP</TitleText>
						<TitleText style={{ fontSize: "14px", fontWeight: fontWeights.medium }}>
							: Manpower
						</TitleText>
					</Grid>
				</Grid>
			</WrapperTable>
			<WrapperTable style={{ marginTop: "20px" }}>
				<BottomTable />
			</WrapperTable>
		</>
	);
}
