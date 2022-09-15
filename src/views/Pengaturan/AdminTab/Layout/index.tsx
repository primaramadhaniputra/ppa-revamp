import { Grid } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import React from "react";
import { fontSizing, fontWeights } from "utils/styles";
import LoginForm from "./LoginForm";
import NavbarForm from "./NavbarForm";

export default function Layout() {
	return (
		<>
			<TitlePage
				type="h4"
				styles={{
					margin: "50px 0 30px",
					fontSize: fontSizing.xl.fontSize,
					fontWeight: fontWeights.bold,
				}}
			>
				Layout
			</TitlePage>
			<Grid container flexDirection="column" gap={30}>
				<LoginForm />
				<NavbarForm />
			</Grid>
		</>
	);
}
