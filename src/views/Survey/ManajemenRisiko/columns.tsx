import { createColumnHelper } from "@tanstack/react-table";
import { IcEllipse } from "atoms/Icon";

export type Person = {
	name: string;
	lastName: string;
	age: number;
	visits: number;
	status: string;
	progress: number;
	testing: number;
	baca: number;
};

const columnHelper = createColumnHelper<Person>();

export const Columns = [
	columnHelper.accessor("name", {
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
		header: () => <span></span>,
	}),
	columnHelper.group({
		id: "Existing Business: Mining Contractor",
		header: (info) => {
			return (
				<>
					<span style={{ lineHeight: "21px", color: "#969696" }}>Existing Busines</span>
					<br />
					<span style={{ lineHeight: "21px" }}> Mining Contractor</span>
				</>
			);
		},
		columns: [
			columnHelper.accessor("age", {
				cell: (info) => info.getValue(),
				header: () => <IcEllipse width={15} style={{ color: "#29CC6A" }} />,
			}),
			columnHelper.accessor((row) => row.lastName, {
				id: "visits",
				cell: (info) => info.getValue(),
				header: () => <IcEllipse width={15} style={{ color: "#FC5555" }} />,
			}),
		],
	}),
	columnHelper.group({
		id: "Future Business: Dealership",
		header: (info) => {
			return (
				<>
					<span style={{ lineHeight: "21px", color: "#969696" }}>Future Business</span>
					<br />
					<span style={{ lineHeight: "21px" }}> Dealership</span>
				</>
			);
		},
		columns: [
			columnHelper.accessor("status", {
				cell: (info) => info.getValue(),
				header: () => <IcEllipse width={15} style={{ color: "#29CC6A" }} />,
			}),
			columnHelper.accessor((row) => row.lastName, {
				id: "progress",
				cell: (info) => info.getValue(),
				header: () => <IcEllipse width={15} style={{ color: "#FC5555" }} />,
			}),
		],
	}),
	columnHelper.group({
		id: "Future Business: Mining Concession",
		header: (info) => {
			return (
				<>
					<span style={{ lineHeight: "21px", color: "#969696" }}>Future Business</span>
					<br />
					<span style={{ lineHeight: "21px" }}> Mining Contractor</span>
				</>
			);
		},
		columns: [
			columnHelper.accessor("testing", {
				cell: (info) => info.getValue(),
				header: () => <IcEllipse width={15} style={{ color: "#29CC6A" }} />,
			}),
			columnHelper.accessor((row) => row.lastName, {
				id: "baca",
				cell: (info) => info.getValue(),
				header: () => <IcEllipse width={15} style={{ color: "#FC5555" }} />,
			}),
		],
	}),
];
