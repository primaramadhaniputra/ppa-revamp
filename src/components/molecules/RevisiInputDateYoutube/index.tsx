import { IcCalendar } from "atoms/Icon";
import React, { useState } from "react";
import { Calendar } from "react-date-range";
import { convert } from "utils/functions";
import { Container, FormField, FormGroup, FormLabel, Wrapper } from "./styles";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

// interface IProps {
//   placeholder?: string;
// }

interface IProps {
	dateState: Date;
	setDateState: (e: Date) => void;
	title: string;
}

export default function RevisiInputDateYoutube({ dateState, setDateState, title }: IProps) {
	const [isDate, setDate] = useState(false);

	const handleDateInput = () => {
		setDate(!isDate);
	};

	const handleSelectDate = (e: Date) => {
		setDateState(e);
	};

	return (
		<Wrapper>
			<FormGroup>
				<FormField
					type="input"
					placeholder="Name"
					onClick={handleDateInput}
					value={dateState ? convert(dateState) : ""}
				/>
				<FormLabel htmlFor="name">{title}</FormLabel>
			</FormGroup>
			<IcCalendar width={20} cursor="pointer" color="#e0e1e0" onClick={handleDateInput} />
			{isDate && (
				<Container>
					<Calendar date={dateState} onChange={handleSelectDate} />
				</Container>
			)}
		</Wrapper>
	);
}
