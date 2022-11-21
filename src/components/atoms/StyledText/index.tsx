import { ITextProps } from "@hudoro/neron";
import { Typography } from "./styles";

interface IProps extends ITextProps {}

export default function StyledText({ children, variant = "p", ...rest }: IProps) {
	return (
		<Typography {...rest} variant={variant}>
			{children}
		</Typography>
	);
}
