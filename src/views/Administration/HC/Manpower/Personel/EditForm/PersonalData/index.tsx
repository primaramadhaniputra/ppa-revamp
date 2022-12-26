import { Grid } from "@hudoro/neron";
import React from "react";
import UltimateInput from "src/components/organism/UltimateInput";

const PersonalData = () => {
	return (
		<Grid container flexDirection="column" gap={15}>
			<Grid container gap={50}>
				<Grid>
					<UltimateInput isInput={true} title="photo" type={"file"} />
				</Grid>
				<Grid>
					<UltimateInput isInputSelect={true} title={"Perusahaan"} />
				</Grid>
			</Grid>

			<Grid container gap={50}>
				<Grid>
					<UltimateInput isDate={true} title={"Hiring Date"} />
				</Grid>
				<Grid>
					<UltimateInput isInput={true} title={"Agama"} />
				</Grid>
			</Grid>

			<Grid container gap={50}>
				<Grid>
					<UltimateInput isInput={true} title={"Tempat Lahir"} />
				</Grid>
				<Grid>
					<UltimateInput isInputSelect={true} title={"Tanggal Lahir"} />
				</Grid>
			</Grid>

			<Grid container gap={50}>
				<Grid>
					<UltimateInput isInputSelect={true} title={"Pendidikan"} />
				</Grid>
				<Grid>
					<UltimateInput isInput={true} title={"Email"} />
				</Grid>
			</Grid>

			<Grid container gap={50}>
				<Grid>
					<UltimateInput isInput={true} title={"No HP"} />
				</Grid>
				<Grid>
					<UltimateInput isInput={true} title={"No Emergency"} />
				</Grid>
			</Grid>

			<Grid container gap={50}>
				<Grid>
					<UltimateInput isInput={true} title={"No KTP"} />
				</Grid>
				<Grid>
					<UltimateInput isInput={true} title={"Alamat"} />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default PersonalData;
