import { Grid, Icon } from "@hudoro/neron";
import React, { useState } from "react";
import { IconContainer, StyledInput, StyledLabel } from "./styles";

interface IProps {
	title: string;
	placeholder?: string;
	name: string;
	onClick?: () => void;
	value?: string;
	color?: string;
	type?: string;
	style?: React.CSSProperties;
	onChange?: (e: any) => void;
	disabled?: boolean;
	styleLabel?: React.CSSProperties;
	icon?: boolean;
}

export default function LabeledInput({
	title,
	color = "black",
	styleLabel,
	style,
	icon,
	...rest
}: IProps) {
	const [isShowPassword, setIsShowPassword] = useState(false);
	const handleShowPassword = () => {
		setIsShowPassword(!isShowPassword);
	};
	return (
		<Grid container flexDirection="column" gap={7} style={{ position: "relative", ...style }}>
			{title && <StyledLabel style={{ color, ...styleLabel }}>{title}</StyledLabel>}
			<StyledInput
				autoComplete="off"
				{...rest}
				style={{ flex: "1" }}
				type={isShowPassword && icon ? "password" : "text"}
			/>
			{icon && (
				<IconContainer>
					<Icon iconName={isShowPassword ? "IcEyeSlash" : "IcEye"} onClick={handleShowPassword} />
				</IconContainer>
			)}
		</Grid>
	);
}
