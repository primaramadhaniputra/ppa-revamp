import Image from "next/image";
import React from "react";
import Footer from "src/components/organism/Footer";
import FormInput from "src/components/organism/FormInput";
import WelcomeTextComponent from "src/components/organism/WelcomeText";
import { useProgressiveImage } from "utils/customHooks";
import { colors } from "utils/styles";
import {
	FooterContainer,
	FormWrapper,
	Text1,
	Text2,
	TextWrapper,
	Wrapper,
	Wrapper2,
} from "./styles";

export default function Form() {
	const loaded = useProgressiveImage("/images/mobilProyek.jpg");

	return (
		<Wrapper style={{ backgroundImage: `url(${loaded || ""})` }}>
			<Wrapper2>
				<FormWrapper>
					<Image src="/logo/logo2.png" width={354} height={34} alt="ppa-logo" />
					<WelcomeTextComponent styles={{ color: colors.blue }} />
					<FormInput color={colors.blue} />
				</FormWrapper>
				<FooterContainer>
					<Footer />
				</FooterContainer>
			</Wrapper2>
			<TextWrapper>
				<Text1 variant="h1"> SAFE & STRONG</Text1>
				<Text2 variant="p">OPERATIONAL PERFORMANCE</Text2>
			</TextWrapper>
		</Wrapper>
	);
}
