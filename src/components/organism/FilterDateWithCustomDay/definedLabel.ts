import { isSameDay, addDays, startOfDay, endOfDay, startOfMonth, startOfYear } from "date-fns";

const defineds = {
	startOfWeek: startOfDay(addDays(new Date(), -7)),
	endOfWeek: endOfDay(addDays(new Date(), -1)),
	startOfMonth: startOfDay(startOfMonth(new Date())),
	endOfMonth: endOfDay(addDays(new Date(), -1)),
	startOfYears: startOfDay(startOfYear(new Date())),
	endOfYears: endOfDay(addDays(new Date(), -1)),
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
