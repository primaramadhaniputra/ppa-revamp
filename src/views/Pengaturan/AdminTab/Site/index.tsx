import { Select } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import React from "react";
import { fontSizing, fontWeights } from "utils/styles";
import { SelectLabel } from "../styles";
import { ArrowDown, Container } from "./styles";

export default function Site() {
	return (
		<>
			<TitlePage
				type="h4"
				styles={{
					margin: "0 0 30px",
					fontSize: fontSizing.xl.fontSize,
					fontWeight: fontWeights.bold,
				}}
			>
				Site
			</TitlePage>
			<Container>
				<SelectLabel>Pilih site</SelectLabel>
				<Select
					items={[{ id: 1, values: "MHU", label: "MHU" }]}
					defaultValue={{ id: 1, values: "MHU", label: "MHU" }}
				/>
				<ArrowDown />
			</Container>
		</>
	);
}
