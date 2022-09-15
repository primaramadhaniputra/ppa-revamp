import React from "react";
import Layout from "./Layout";
import Site from "./Site";
import { Wrapper } from "./styles";

export default function AdminTab() {
	return (
		<Wrapper>
			<Site />
			<Layout />
		</Wrapper>
	);
}
