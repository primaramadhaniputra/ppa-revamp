import { Grid } from "@hudoro/neron";
import React from "react";
import UltimateInput from "src/components/organism/UltimateInput";

const PayrollData = () => {
	return (
		<Grid container flexDirection="column" gap={15}>
			<UltimateInput isInput={true} title={"Dept"} />
			<UltimateInput isInput={true} title={"Jabatan"} />
			<UltimateInput isInput={true} title={"Posisi"} />
			<Grid container justifyContent="center" style={{ margin: "20px 0" }}>
				<Grid container justifyContent="center" style={{ flex: 1 }}>
					<UltimateInput wrapperStyle={{ minWidth: 0 }} isSwitch={true} title={"Posisi"} />
				</Grid>
				<Grid container justifyContent="center" style={{ flex: 1 }}>
					<UltimateInput wrapperStyle={{ minWidth: 0 }} isSwitch={true} title={"DAR"} />
				</Grid>
				<Grid container justifyContent="center" style={{ flex: 1 }}>
					<UltimateInput wrapperStyle={{ minWidth: 0 }} isSwitch={true} title={"UDL"} />
				</Grid>
			</Grid>
			<Grid container gap={15}>
				<Grid>
					<UltimateInput isInput={true} title="NPWP" />
				</Grid>
				<Grid>
					<UltimateInput isInput={true} title="Grade" />
				</Grid>
			</Grid>
			<Grid container gap={15}>
				<Grid>
					<UltimateInput isInputSelect={true} title="Bank Account" />
				</Grid>
				<Grid>
					<UltimateInput isInput={true} title="Nomor" />
				</Grid>
			</Grid>
			<UltimateInput isInput={true} title="Bank account name" />
			<Grid container gap={15}>
				<Grid>
					<UltimateInput isInput={true} title="Tunjangan jabatan" />
				</Grid>
				<Grid>
					<UltimateInput isInputSelect={true} title="Cost Centre" />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default PayrollData;
