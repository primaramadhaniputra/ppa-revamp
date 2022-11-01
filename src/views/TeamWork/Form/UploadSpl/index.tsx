import { Grid } from "@hudoro/neron";
import ButtonFile from "atoms/ButtonFile";
import TitleText from "atoms/TitleText";
import React from "react";
import LayoutTable from "src/components/layouts/LayoutTable";

export default function UploadSpl() {
	return (
		<LayoutTable style={{ marginTop: "10px" }}>
			<Grid container alignItems="center" justifyContent="space-between">
				<TitleText>Upload SPL</TitleText>
				<ButtonFile title="UPLOAD FILE" />
			</Grid>
		</LayoutTable>
	);
}
