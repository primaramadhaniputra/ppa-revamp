import { Grid } from "@hudoro/neron";
import StyledInputLabel from "atoms/StyledInputLabel";
import React from "react";
import { Wrapper } from "./styles";

const GlobalFilter = () => {
	return (
		<Wrapper>
			<Grid container gap={5} alignItems="center">
				<StyledInputLabel title="Show" style={{ width: "50px" }} type="number" />
			</Grid>
		</Wrapper>
	);
};

export default GlobalFilter;
