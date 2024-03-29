import { Grid } from "@hudoro/neron";
import Image from "next/image";
import React from "react";
import Footer from "src/components/organism/Footer";
import FormInput from "src/components/organism/FormInput";
import WelcomeTextComponent from "src/components/organism/WelcomeText";
import { FooterContainer, FormWrapper } from "./styles";

interface IProps {
	order?: number;
}

export default function Form({ order }: IProps) {
	return (
		<Grid style={{ position: "relative", order }}>
			<FormWrapper>
				<Image src="/logo/logo2.png" width={354} height={34} alt="ppa-logo" />
				<WelcomeTextComponent />
				<FormInput />
			</FormWrapper>
			<FooterContainer>
				<Footer />
			</FooterContainer>
		</Grid>
	);
}
