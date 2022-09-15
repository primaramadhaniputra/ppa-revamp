import React from "react";
import Footer from "src/components/organism/Footer";
import { Wrapper } from "./styles";
import RenderLogin from "../RenderLogin";

export default function Login22() {
	return (
		<Wrapper>
			<RenderLogin typeLogin="login22" nameLogin="secondLogin" />
			<Footer />
		</Wrapper>
	);
}
