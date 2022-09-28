import { Grid } from "@hudoro/neron";
import RevisiDropdown from "atoms/RevisiDropdown";
import StyledButton from "atoms/StyledButton";
import { colors, fontWeights } from "utils/styles";
import { ButtonWrapper, Wrapper } from "./styles";

export default function TopFilter() {
	return (
		<Wrapper>
			<Grid style={{ minWidth: "200px" }}>
				<RevisiDropdown placeholder="Karyawan" />
			</Grid>
			<Grid style={{ minWidth: "200px" }}>
				<RevisiDropdown placeholder="Dept" />
			</Grid>
			<Grid style={{ minWidth: "200px" }}>
				<RevisiDropdown placeholder="Perusahaan" />
			</Grid>
			<ButtonWrapper>
				<StyledButton
					style={{
						fontSize: "18px",
						padding: "0",
						fontWeight: fontWeights.bold,
						backgroundColor: colors.orange,
						borderRadius: "3px",
						minWidth: "150px",
					}}
				>
					SHOW
				</StyledButton>
			</ButtonWrapper>
		</Wrapper>
	);
}
