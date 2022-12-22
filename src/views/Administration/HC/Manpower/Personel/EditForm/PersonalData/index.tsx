import { Grid } from "@hudoro/neron";
import React from "react";
import UltimateInput from "src/components/organism/UltimateInput";

const PersonalData = () => {
	return (
		<Grid container flexDirection="column" gap={15}>
			<UltimateInput isInput={true} title="photo" type={"file"} />
			<UltimateInput isInputSelect={true} title={"Perusahaan"} />
			<UltimateInput isDate={true} title={"Hiring Date"} />
			<UltimateInput isInput={true} title={"Agama"} />
			<UltimateInput isInput={true} title={"Tempat Lahir"} />
			<UltimateInput isInputSelect={true} title={"Tanggal Lahir"} />
			<UltimateInput isInputSelect={true} title={"Pendidikan"} />
			<UltimateInput isInput={true} title={"Email"} />
			<UltimateInput isInput={true} title={"No HP"} />
			<UltimateInput isInput={true} title={"No Emergency"} />
			<UltimateInput isInput={true} title={"No KTP"} />
			<UltimateInput isInput={true} title={"Alamat"} />
		</Grid>
	);
};

export default PersonalData;
