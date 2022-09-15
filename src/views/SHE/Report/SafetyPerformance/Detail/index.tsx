import React from "react";
import Insiden from "./Insiden";
import ManPower from "./ManPower";
import Performance from "./Performance";
import { Container, Wrapper } from "./styles";

export default function Detail() {
	return (
		<Wrapper>
			<Insiden />
			<Container>
				<ManPower />
				<Performance />
			</Container>
		</Wrapper>
	);
}
