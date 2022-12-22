import { Grid, Text } from "@hudoro/neron";
import React from "react";
import UltimateInput from "src/components/organism/UltimateInput";

const EmployeeMutation = () => {
	return (
		<>
			<Grid container flexDirection="column" gap={15}>
				<UltimateInput isInput={true} title="Dept" />
				<UltimateInput isInput={true} title="Jabatan" />
				<UltimateInput isInput={true} title="Position" />
				<UltimateInput isInputSelect={true} title="Atasan Lansung" />
			</Grid>
			<Grid style={{ margin: "50px 0", textAlign: "center" }}>
				<Text variant="h4"> Will be transfered to</Text>
			</Grid>
			<Grid container flexDirection="column" gap={15}>
				<UltimateInput isInputSelect={true} title="Dept" />
				<UltimateInput isInputSelect={true} title="Jabatan" />
				<UltimateInput isInputSelect={true} title="Position" />
				<UltimateInput isInputSelect={true} title="Atasan Lansung" />
				<UltimateInput isDate={true} title="Tanggal Efektif" />
			</Grid>
		</>
	);
};

export default EmployeeMutation;
