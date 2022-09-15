import LabeledInput from "atoms/LabeledInput";
import StyledButton from "atoms/StyledButton";
import React, { FormEvent } from "react";
import { forgotPassword } from "services/users";
import Footer from "src/components/organism/Footer";
import { notify } from "utils/functions";
import { LoginWrapper, StyledCard, Title, Wrapper } from "./styles";

export default function ForgotPassword() {
	const handleSubmit = async (form: FormEvent<HTMLFormElement>) => {
		try {
			form.preventDefault();
			const formData = new FormData(form.currentTarget);
			const email = formData.get("email");
			await forgotPassword({
				body: {
					email,
				},
				path: "/forgot-password",
			});
			return notify("Silahkan periksa email anda", "success");
		} catch (error: any) {
			return notify(error.message, "error");
		}
	};

	return (
		<Wrapper>
			<LoginWrapper onSubmit={handleSubmit}>
				<StyledCard>
					<Title>Forgot Password</Title>
					<LabeledInput title="Email" name="email" />
					<StyledButton onClick={() => {}} style={{ marginTop: "20px" }}>
						Submit
					</StyledButton>
				</StyledCard>
			</LoginWrapper>
			<Footer />
		</Wrapper>
	);
}
