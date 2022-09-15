import { Grid } from "@hudoro/neron";
import React from "react";
import Footer from "src/components/organism/Footer";
import ImageForm from "molecules/ImageForm";
import Form from "./Form";
import { FooterContainer, Wrapper, WrapperImageInput } from "../styles";

interface IProps {
	type?: string;
}

export default function RenderLogin({ type }: IProps) {
	function render() {
		if (type === "login4" || type === "login51") {
			return (
				<Wrapper type={type}>
					<WrapperImageInput type="login4">
						<Grid style={{ position: "relative" }}>
							<Form type={type} />
							<ImageForm height="745px" />
						</Grid>
					</WrapperImageInput>
					<FooterContainer>
						<Footer />
					</FooterContainer>
				</Wrapper>
			);
		}
		return (
			<Wrapper type={type}>
				<WrapperImageInput>
					<Grid style={{ position: "relative" }}>
						<Form />
						<ImageForm height="745px" />
					</Grid>
				</WrapperImageInput>
				<FooterContainer>
					<Footer />
				</FooterContainer>
			</Wrapper>
		);
	}

	return <>{render()}</>;
}
