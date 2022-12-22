import { Grid, Text } from "@hudoro/neron";
import React from "react";
import UltimateInput from "src/components/organism/UltimateInput";

const Benefit = () => {
	return (
		<>
			<Grid container flexDirection="column" gap={15}>
				<UltimateInput isInputSelect={true} title="POH" />
				<Grid container gap={15}>
					<Grid>
						<UltimateInput isInput={true} title="On Site" type={"number"} />
					</Grid>
					<Grid>
						<UltimateInput isInput={true} title="Off Site" type={"number"} />
					</Grid>
				</Grid>
				<UltimateInput isInput={true} title="BPJS TK" />
				<UltimateInput isInput={true} title="Allianz" />
				<UltimateInput isInput={true} title="BPJS KES" />
			</Grid>
			<Grid style={{ margin: "50px 0", textAlign: "center" }}>
				<Text variant="h4">UNIFORM</Text>
			</Grid>
			<Grid container flexDirection="column" gap={15}>
				<UltimateInput isInputSelect={true} title="Ukuran Baju" />
				<UltimateInput isInput={true} title="Ukuran Celana" />
				<UltimateInput isInputSelect={true} title="Ukuran Sepatu" />
			</Grid>
		</>
	);
};

export default Benefit;
