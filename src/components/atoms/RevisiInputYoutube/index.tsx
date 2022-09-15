import React from "react";
import { FormField, FormGroup, FormLabel, Wrapper } from "./styles";

// interface IProps {
//   placeholder?: string;
// }

export default function RevisiInputYoutube() {
	return (
		<Wrapper>
			<FormGroup>
				<FormField type="input" placeholder="Name" />
				<FormLabel htmlFor="name">Subject Name</FormLabel>
			</FormGroup>
		</Wrapper>
	);
}
