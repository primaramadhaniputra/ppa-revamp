import { createColumnHelper } from "@tanstack/react-table";
import { IcEllipse } from "atoms/Icon";

export type Person = {
	firstName: string;
	lastName: string;
	age: number;
	visits: number;
	status: string;
	progress: number;
};

const columnHelper = createColumnHelper<Person>();

export const Columns = [
	columnHelper.accessor("firstName", {
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
		header: () => <span></span>,
	}),
	columnHelper.group({
		id: "hello",
		header: () => (
			<>
				<span style={{ lineHeight: "21px", color: "#969696" }}>Existing Busines</span>
				<br />
				<span style={{ lineHeight: "21px" }}> Mining Contractor</span>
			</>
		),
		columns: [
			columnHelper.accessor("firstName", {
				cell: (info) => info.getValue(),
				header: () => <IcEllipse width={15} style={{ color: "#29CC6A" }} />,
			}),
			columnHelper.accessor((row) => row.lastName, {
				id: "lastName",
				cell: (info) => info.getValue(),
				header: () => <IcEllipse width={15} style={{ color: "#FC5555" }} />,
			}),
		],
	}),
	columnHelper.group({
		id: "hello",
		header: () => (
			<>
				<span style={{ lineHeight: "21px", color: "#969696" }}>Existing Busines</span>
				<br />
				<span style={{ lineHeight: "21px" }}> Mining Contractor</span>
			</>
		),
		columns: [
			columnHelper.accessor("firstName", {
				cell: (info) => info.getValue(),
				header: () => <IcEllipse width={15} style={{ color: "#29CC6A" }} />,
			}),
			columnHelper.accessor((row) => row.lastName, {
				id: "lastName",
				cell: (info) => info.getValue(),
				header: () => <IcEllipse width={15} style={{ color: "#FC5555" }} />,
			}),
		],
	}),
	columnHelper.group({
		id: "hello",
		header: () => (
			<>
				<span style={{ lineHeight: "21px", color: "#969696" }}>Existing Busines</span>
				<br />
				<span style={{ lineHeight: "21px" }}> Mining Contractor</span>
			</>
		),
		columns: [
			columnHelper.accessor("firstName", {
				cell: (info) => info.getValue(),
				header: () => <IcEllipse width={15} style={{ color: "#29CC6A" }} />,
			}),
			columnHelper.accessor((row) => row.lastName, {
				id: "lastName",
				cell: (info) => info.getValue(),
				header: () => <IcEllipse width={15} style={{ color: "#FC5555" }} />,
			}),
		],
	}),
];
