import { Card, Grid } from "@hudoro/neron";
import { StyledInput } from "atoms/LabeledInput/styles";
import StyledButton from "atoms/StyledButton";
import React from "react";
import { fontWeights } from "utils/styles";
import { TitleText, WrapperTable, WrapperTitle } from "../styles";

export default function SetWakeUpCall() {
	return (
		<>
			<WrapperTitle>
				<TitleText>Set Wake Up Call</TitleText>
			</WrapperTitle>
			<WrapperTable style={{ marginTop: "20px" }}>
				<TitleText style={{ fontSize: "15px", textAlign: "center", fontWeight: fontWeights.semi }}>
					LIST PILIHAN PASSWORD WAKE UP CALL
				</TitleText>
				<Card style={{ margin: "40px auto", maxWidth: "450px" }}>
					<TitleText style={{ fontSize: "13px", fontWeight: fontWeights.semi }}>Password</TitleText>
					<Grid container style={{ marginTop: "10px" }} gap={10}>
						<StyledInput style={{ width: "100%" }} />
						<StyledButton>Tambah</StyledButton>
						<StyledButton style={{ backgroundColor: "#aaa" }}>Reset</StyledButton>
					</Grid>
				</Card>
			</WrapperTable>
		</>
	);
}
