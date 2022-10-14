import { IcCalendar } from "atoms/Icon";
import React, { useState } from "react";
import { DateRangePicker, Range } from "react-date-range";
import { addDays } from "date-fns";
import { convert } from "utils/functions";
import { Grid } from "@hudoro/neron";
import { defaultStaticRanges } from "./definedLabel";
import { Container, DateContainer, DateIconContainer, StyledInput } from "./styles";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

interface IProps {
	dateState: {
		startDate: Date;
		endDate: Date;
		key: string;
	}[];
	setDateState: (e: Range[]) => void;
	placeholder: string;
}

export default function FilteredDate2({ dateState, setDateState, placeholder }: IProps) {
	const [isDate, setDate] = useState(false);

	const handleDateInput = () => {
		setDate(!isDate);
	};

	return (
		<>
			<DateContainer style={{ flex: 1 }}>
				<Grid container>
					<Grid>
						<StyledInput
							name="date"
							value={
								dateState && `${convert(dateState[0].startDate)} - ${convert(dateState[0].endDate)}`
							}
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
						<DateRangePicker
							onChange={(item) => setDateState([item.selection] as any)}
							moveRangeOnFirstSelection={false}
							months={1}
							ranges={dateState as any}
							minDate={addDays(new Date(), -2000)}
							direction="vertical"
							scroll={{ enabled: true }}
							showMonthAndYearPickers={true}
							showDateDisplay={false}
							staticRanges={defaultStaticRanges}
							inputRanges={[]}
						/>
					</Container>
				)}
			</DateContainer>
		</>
	);
}
