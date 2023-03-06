import { IcCalendar } from "atoms/Icon";
import React, { useState } from "react";
import { Calendar } from "react-date-range";
import { convert } from "utils/functions";
import { Grid } from "@hudoro/neron";
import { Container, DateContainer, DateIconContainer, StyledInput } from "./styles";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

interface IProps {
	dateState: Date;
	setDateState: (e: Date) => void;
	placeholder: string;
}

export default function RevisiDate({ dateState, setDateState, placeholder }: IProps) {
	const [isDate, setDate] = useState(false);

	const handleDateInput = () => {
		setDate(!isDate);
	};

	const handleSelectDate = (e: Date) => {
		setDateState(e);
		setDate(!isDate);
	};

	return (
		<>
			<DateContainer style={{ flex: 1 }}>
				<Grid container>
					<Grid>
						<StyledInput
							name="date"
							value={dateState && convert(dateState)}
							onClick={handleDateInput}
							placeholder={placeholder}
						/>
					</Grid>
					<DateIconContainer>
						<IcCalendar width={20} onClick={handleDateInput} color="#E0E1E0" />
					</DateIconContainer>
				</Grid>
				{isDate && (
					<Container>
						<Calendar date={dateState} onChange={handleSelectDate} />
					</Container>
				)}
			</DateContainer>
		</>
	);
}
