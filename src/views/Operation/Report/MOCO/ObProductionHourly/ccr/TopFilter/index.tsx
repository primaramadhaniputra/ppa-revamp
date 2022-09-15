import { Grid } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import DateCalendar from "molecules/Date";
import StyledDropdownMenu from "molecules/StyledDropdownMenu";
import React, { useState } from "react";
import { colors, fontWeights } from "utils/styles";

export default function TopFilter() {
	const [DateState, setDateState] = useState(new Date());
	const [activeShiftDropdown, setActiveShiftDropdown] = useState([]);

	const handleDateState = (e: Date) => {
		setDateState(e);
	};

	return (
		<Grid container style={{ margin: "15px 0", gap: 5 }}>
			<DateCalendar title="Date" dateState={DateState} setDateState={handleDateState} />
			<Grid>
				<StyledDropdownMenu
					title="Shift"
					data={[1, 2]}
					activeDropdown={activeShiftDropdown}
					setActiveDropdown={setActiveShiftDropdown}
				/>
			</Grid>
			<Grid container style={{ flex: 1, minWidth: "150px" }}>
				<StyledButton
					style={{
						fontSize: "25px",
						padding: "0",
						fontWeight: fontWeights.bold,
						backgroundColor: colors.orange,
					}}
				>
					SHOW
				</StyledButton>
			</Grid>
		</Grid>
	);
}
