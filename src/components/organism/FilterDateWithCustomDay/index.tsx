import { IcCalendarShape } from "atoms/Icon";
import { useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { convert } from "utils/functions";
import { Grid } from "@hudoro/neron";
import { useOutsideClick } from "utils/customHooks";
import { defaultStaticRanges } from "./definedLabel";
import { Container, DateContainer, DateIconContainer, StyledInput } from "./styles";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
// , Range
interface IProps {
	dateState: {
		startDate: Date;
		endDate: Date;
		key: string;
	}[];
	setDateState: (e: any[]) => void;
	placeholder: string;
}

export default function FilteredDateWithCustomDay({
	dateState,
	setDateState,
	placeholder,
}: IProps) {
	const [isDate, setDate] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useOutsideClick(ref, () => {
		setDate(false);
	});

	const handleDateInput = () => {
		setDate(!isDate);
	};

	return (
		<DateContainer style={{ flex: 1 }} ref={ref}>
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
					<IcCalendarShape width={20} onClick={handleDateInput} color="#969696" />
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
	);
}
