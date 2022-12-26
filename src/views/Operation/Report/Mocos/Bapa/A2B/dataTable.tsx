import { ColumnDef } from "@tanstack/react-table";
import { TextTable } from "./styles";

interface IProps {
	[x: string]: any;
}

export const dataTable: ColumnDef<IProps>[] = [
	{
		accessorKey: "Model",
		cell: (info) => <TextTable>{info.getValue()}</TextTable>,
		footer: (props) => props.column.id,
		header: () => "Model",
	},
	{
		accessorKey: "Code Unit",
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
	},
	{
		accessorKey: "Owner",
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
	},
	{
		accessorKey: "Delivery Date",
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
	},
	{
		accessorKey: "MOHH",
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
	},
	{
		header: "HM",
		footer: (props) => props.column.id,
		columns: [
			{
				accessorKey: "Start",
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id,
			},
			{
				accessorKey: "Stop",
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id,
			},
		],
	},
	{
		header: "Working Hours",
		footer: (props) => props.column.id,
		columns: [
			{
				accessorKey: "TOH",
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id,
			},
			{
				accessorKey: "MNG",
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id,
			},
			{
				accessorKey: "PLT",
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id,
			},
			{
				accessorKey: "TRV",
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id,
			},
			{
				accessorKey: "ID",
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id,
			},
		],
	},
	{
		header: "HM",
		footer: (props) => props.column.id,
		columns: [
			{
				accessorKey: "DL",
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id,
			},
			{
				accessorKey: "Wait Eqp",
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id,
			},
		],
	},
	{
		accessorKey: "No Opt",
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
	},
	{
		header: "BD",
		footer: (props) => props.column.id,
		columns: [
			{
				accessorKey: "SCH",
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id,
			},
			{
				accessorKey: "UNSCH",
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id,
			},
			{
				accessorKey: "TYRE",
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id,
			},
		],
	},
	{
		accessorKey: "ACC",
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
	},
	{
		header: "Freq.BD",
		footer: (props) => props.column.id,
		columns: [
			{
				accessorKey: "SCH",
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id,
			},
			{
				accessorKey: "UNSCH",
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id,
			},
			{
				accessorKey: "No Opt",
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id,
			},
		],
	},
	{
		accessorKey: "FUEL",
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
	},
	{
		accessorKey: "FUEL CONS",
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
	},
	{
		header: "PA",
		footer: (props) => props.column.id,
		columns: [
			{
				accessorKey: "Plan",
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id,
			},
			{
				accessorKey: "With No Opt",
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id,
			},
			{
				accessorKey: "Without No Opt",
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id,
			},
		],
	},
	{
		header: "UA",
		footer: (props) => props.column.id,
		columns: [
			{
				accessorKey: "With No Opt",
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id,
			},
			{
				accessorKey: "Without No Opt",
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id,
			},
		],
	},
];
