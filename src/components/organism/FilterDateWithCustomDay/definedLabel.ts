import {
	startOfMonth,
	endOfMonth,
	startOfWeek,
	endOfWeek,
	isSameDay,
	startOfYear,
	endOfYear,
	addYears,
} from "date-fns";

const defineds = {
	startOfWeek: startOfWeek(new Date()),
	endOfWeek: endOfWeek(new Date()),
	startOfMonth: startOfMonth(new Date()),
	endOfMonth: endOfMonth(new Date()),
	startOfYears: startOfYear(addYears(new Date(), 0)),
	endOfYears: endOfYear(addYears(new Date(), 0)),
};

const staticRangeHandler = {
	range: {} as any,
	isSelected(range: { startDate: number | Date; endDate: number | Date }) {
		const definedRange = this.range();
		return (
			isSameDay(range.startDate, definedRange.startDate) &&
			isSameDay(range.endDate, definedRange.endDate)
		);
	},
};

export function createStaticRanges(ranges: any[]) {
	return ranges.map((range: any) => ({ ...staticRangeHandler, ...range }));
}

export const defaultStaticRanges = createStaticRanges([
	{
		label: " Week To Date",
		range: () => ({
			startDate: defineds.startOfWeek,
			endDate: defineds.endOfWeek,
		}),
	},
	{
		label: "Month To Date",
		range: () => ({
			startDate: defineds.startOfMonth,
			endDate: defineds.endOfMonth,
		}),
	},
	{
		label: "Year To date",
		range: () => ({
			startDate: defineds.startOfYears,
			endDate: defineds.endOfYears,
		}),
	},
]);
