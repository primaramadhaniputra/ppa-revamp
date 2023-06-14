import { createColumnHelper } from "@tanstack/react-table";

export type Person = {
	name: string;
	nrp: string;
	answerQeustion1Type1No1: string;
	answerQeustion1Type1No2: string;
	answerQeustion1Type1No3: string;
	answerQeustion1Type1No4: string;
	answerQeustion1Type1No5: string;
	answerQeustion1Type1No6: string;
	answerQeustion1Type1No7: string;
	shortAnswer1No1: string;
	shortAnswer1No2: string;
};

const columnHelper = createColumnHelper<Person>();

export const Columns = [
	columnHelper.accessor("name", {
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
	}),
	columnHelper.accessor("nrp", {
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
	}),
	columnHelper.group({
		id: "Existing Business: Mining Contractor (1)",
		header: () => {
			return <span style={{ lineHeight: "21px" }}> Existing Busines Mining Contractor (1)</span>;
		},
		columns: [
			columnHelper.accessor((row) => row.answerQeustion1Type1No1, {
				id: "answerQeustion1Type1No1",
				cell: (info) => info.getValue(),
			}),
		],
	}),
];
