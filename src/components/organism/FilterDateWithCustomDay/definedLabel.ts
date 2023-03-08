import {
	addDays,
	endOfDay,
	startOfDay,
	startOfMonth,
	endOfMonth,
	addMonths,
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
	startOfLastWeek: startOfWeek(addDays(new Date(), -7)),
	endOfLastWeek: endOfWeek(addDays(new Date(), -7)),
	startOfToday: startOfDay(new Date()),
	endOfToday: endOfDay(new Date()),
	startOfYesterday: startOfDay(addDays(new Date(), -1)),
	endOfYesterday: endOfDay(addDays(new Date(), -1)),
	startOfMonth: startOfMonth(new Date()),
	endOfMonth: endOfMonth(new Date()),
	startOfLastMonth: startOfMonth(addMonths(new Date(), -1)),
	endOfLastMonth: endOfMonth(addMonths(new Date(), -1)),
	startOfYears: startOfYear(addYears(new Date(), 0)),
	endOfYears: endOfYear(addYears(new Date(), 0)),
	startOfLastYears: startOfYear(addYears(new Date(), -1)),
	endOfLastYears: endOfYear(addYears(new Date(), -1)),
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
		label: "Today",
		range: () => ({
			startDate: defineds.startOfToday,
			endDate: defineds.endOfToday,
		}),
	},
	{
		label: "Yesterday",
		range: () => ({
			startDate: defineds.startOfYesterday,
			endDate: defineds.endOfYesterday,
		}),
	},

	{
		label: "This Week",
		range: () => ({
			startDate: defineds.startOfWeek,
			endDate: defineds.endOfWeek,
		}),
	},
	{
		label: "Last Week",
		range: () => ({
			startDate: defineds.startOfLastWeek,
			endDate: defineds.endOfLastWeek,
		}),
	},
	{
		label: "This Month",
		range: () => ({
			startDate: defineds.startOfMonth,
			endDate: defineds.endOfMonth,
		}),
	},
	{
		label: "Last Month",
		range: () => ({
			startDate: defineds.startOfLastMonth,
			endDate: defineds.endOfLastMonth,
		}),
	},
	{
		label: "This Years",
		range: () => ({
			startDate: defineds.startOfYears,
			endDate: defineds.endOfYears,
		}),
	},
	{
		label: "Last Years",
		range: () => ({
			startDate: defineds.startOfLastYears,
			endDate: defineds.endOfLastYears,
		}),
	},
]);
