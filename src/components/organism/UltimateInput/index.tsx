import { Grid } from "@hudoro/neron";
import { IcCaretDown } from "atoms/Icon";
import React, { useState } from "react";
import { Calendar } from "react-date-range";
import {
	DateContainer,
	Input,
	Label,
	SelectIconContainer,
	SelectWrapper,
	StyledSelect,
	Wrapper,
} from "./Styles";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	multiple?: boolean;
	isInput?: boolean;
	isInputSelect?: boolean;
	isLabel?: boolean;
	title?: string;
	isDate?: boolean;
	maxLableWidth?: string;
}

const UltimateInput = ({
	multiple,
	isInput,
	isInputSelect,
	isLabel,
	isDate,
	title = "dani ganteng",
	maxLableWidth,
	...rest
}: IProps) => {
	const [date, setDate] = useState(new Date());
	const [isShowDate, setIsShowDate] = useState(false);

	return (
		<Wrapper>
			{isLabel && (
				<Grid container style={{ flex: 1, maxWidth: maxLableWidth || "250px" }}>
					<Label>{title}</Label>
				</Grid>
			)}
			{isDate && (
				<Grid style={{ position: "relative" }}>
					<Input onClick={() => setIsShowDate(!isShowDate)} value={date.toLocaleDateString()} />
					{isShowDate && (
						<DateContainer>
							<Calendar date={date} onChange={(e) => setDate(e)} />
						</DateContainer>
					)}
				</Grid>
			)}
			{isInput && (
				<Grid>
					<Input {...rest} />
				</Grid>
			)}
			{isInputSelect && (
				<SelectWrapper>
					<StyledSelect
						items={[
							{ id: "1", value: "testing", label: "Testing" },
							{ id: "2", value: "testing", label: "Testing" },
						]}
						multiple={multiple && multiple}
					/>
					<SelectIconContainer>
						<IcCaretDown width={18} color="rgba(0,0,0,.3)" />
					</SelectIconContainer>
				</SelectWrapper>
			)}
		</Wrapper>
	);
};

export default UltimateInput;
