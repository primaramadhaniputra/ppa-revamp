import { isSameDay, addDays, startOfDay, addWeeks, endOfDay } from "date-fns";

const defineds = {
	startOfWeek: startOfDay(addWeeks(new Date(), -1)),
	endOfWeek: endOfDay(addWeeks(new Date(), 0)),
	startOfMonth: startOfDay(addDays(new Date(), -30)),
	endOfMonth: endOfDay(addDays(new Date(), 0)),
	startOfYears: startOfDay(addDays(new Date(), -365)),
	endOfYears: endOfDay(addDays(new Date(), 0)),
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
