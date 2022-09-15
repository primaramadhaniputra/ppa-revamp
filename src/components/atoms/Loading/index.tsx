import React from "react";
import { Container, Wrapper } from "./styles";

export default function Loading() {
	return (
		<Container>
			<Wrapper className="lds-ripple">
				<div></div>
				<div></div>
			</Wrapper>
		</Container>
	);
}
