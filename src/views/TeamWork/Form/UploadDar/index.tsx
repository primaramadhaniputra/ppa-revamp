import { Grid } from "@hudoro/neron";
import TitleText from "atoms/TitleText";
import React from "react";
import LayoutTable from "src/components/layouts/LayoutTable";
import { FileContainer } from "../styles";

export default function UploadDar() {
	return (
		<LayoutTable style={{ marginTop: "10px" }}>
			<Grid container alignItems="center" justifyContent="space-between">
				<TitleText>Upload DAR</TitleText>
				<FileContainer>
					<label htmlFor="file"> +</label>
					<label htmlFor="file"> UPLOAD FILE</label>
					<input type="file" id="file" hidden />
				</FileContainer>
			</Grid>
		</LayoutTable>
	);
}
