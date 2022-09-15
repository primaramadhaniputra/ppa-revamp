import LabeledInput from "atoms/LabeledInput";
import React, { useState } from "react";
import { Calendar } from "react-date-range";
import { convert } from "utils/functions";
import { Container, DateContainer } from "./styles";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

interface IProps {
	title: string;
	dateState: Date;
	setDateState: (e: Date) => void;
	styles?: React.CSSProperties;
}

export default function DateCalendar({ title, dateState, setDateState, styles }: IProps) {
	const [isDate, setDate] = useState(false);

	const handleDateInput = () => {
		setDate(!isDate);
	};

	const handleSelectDate = (e: Date) => {
		setDateState(e);
	};

	return (
		<DateContainer style={{ flex: 1, ...styles }}>
			<LabeledInput
				name="date"
				title={title}
				style={{
					backgroundColor: " #E8F0FE",
					border: "2px solid #E8F0FE",
					padding: "10px 10px",
				}}
				value={convert(dateState)}
				onClick={handleDateInput}
			/>
			{/* <DateIconContainer>
        <IcCalendar width={20} />
      </DateIconContainer> */}
			{isDate && (
				<Container>
					<Calendar date={dateState} onChange={handleSelectDate} />
				</Container>
			)}
		</DateContainer>
	);
}
