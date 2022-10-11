import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { defaultStaticRanges } from "./definedLabel";

const FilteredDate = () => {
	const [state, setState] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);

	return (
		<DateRangePicker
			onChange={(item) => setState([item.selection] as any)}
			// showSelectionPreview={true}
			moveRangeOnFirstSelection={false}
			months={1}
			ranges={state}
			minDate={addDays(new Date(), -2000)}
			// maxDate={addDays(new Date(), 900)}
			direction="vertical"
			scroll={{ enabled: true }}
			showMonthAndYearPickers={true}
			showDateDisplay={false}
			staticRanges={defaultStaticRanges}
			inputRanges={[]}
		/>
	);
};

export default FilteredDate;
