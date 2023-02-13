import { Grid, Text } from "@hudoro/neron";
import { IcLoading } from "atoms/Icon";
import LabeledInput from "atoms/LabeledInput";
import StyledButton from "atoms/StyledButton";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import { login } from "services/users";
import { notify } from "utils/functions";
import { fontSizing } from "utils/styles";
import { RadioWrapper } from "./styles";

interface IProps {
	color?: string;
}

export default function FormInput({ color }: IProps) {
	// const [checkedRadio, setCheckedRadio] = useState(false);
	const [isLogin, setIsLogin] = useState(false);

	const router = useRouter();
	const handleSubmit = async (form: FormEvent<HTMLFormElement>) => {
		try {
			setIsLogin(true);
			form.preventDefault();
			const formData = new FormData(form.currentTarget);
			const nrp = formData.get("nrp");
			const password = formData.get("password");
			const response = await login({
				headers: {
					project_key: "2e7b6395fa5f3861588f3608161b7442",
				},
				body: {
					nrp,
					password,
					site: "MHU",
				},
			});
			Cookies.set("token", response.data.data.token.access);
			router.push("/dashboard");
			return notify("selamat kamu berhasil login", "success");
		} catch (error: any) {
			return notify(error.message, "error");
		} finally {
			setIsLogin(false);
		}
	};
	// const handleRadio = () => {
	// 	setCheckedRadio(!checkedRadio);
	// };

	const handleForgotPassword = () => {
		router.push("/forgot-password");
	};

	return (
		<form style={{ width: "100%" }} onSubmit={handleSubmit}>
			<Grid container flexDirection="column" gap={50}>
				<Grid container flexDirection="column" gap={20}>
					<LabeledInput color={color} name="nrp" title="NRP" required type="number" />
					<LabeledInput
						icon={true}
						color={color}
						title="Password"
						name="password"
						type="password"
						required
						minLength={5}
					/>
					<RadioWrapper container alignItems="center" justifyContent="flex-end">
						{/* <Radio
							label="Remember me"
							onClick={handleRadio}
							onChange={handleRadio}
							checked={checkedRadio}
						/> */}
						<Text
							variant="p"
							style={{ fontSize: fontSizing.xs.fontSize, cursor: "pointer" }}
							onClick={handleForgotPassword}
						>
							Forgot password ?
						</Text>
					</RadioWrapper>
				</Grid>
				<StyledButton onClick={() => {}}>
					{isLogin ? <IcLoading width={18} /> : "Login"}
				</StyledButton>
			</Grid>
		</form>
	);
}
