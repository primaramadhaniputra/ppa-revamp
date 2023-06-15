import { createColumnHelper } from "@tanstack/react-table";

export type Person = {
	answerMultipleChoice1Type1No1: string;
	answerMultipleChoice1Type1No2: string;
	answerMultipleChoice1Type1No3: string;
	answerMultipleChoice1Type1No4: string;
	answerMultipleChoice1Type1No5: string;
	answerMultipleChoice1Type1No6: string;
	answerMultipleChoice1Type1No7: string;
	answerMultipleChoice1Type2No1: string;
	answerMultipleChoice1Type2No2: string;
	answerMultipleChoice1Type2No3: string;
	answerMultipleChoice1Type2No4: string;
	answerMultipleChoice1Type2No5: string;
	answerMultipleChoice1Type2No6: string;
	answerMultipleChoice1Type2No7: string;
	answerMultipleChoice2Type1No1: string;
	answerMultipleChoice2Type1No2: string;
	answerMultipleChoice2Type1No3: string;
	answerMultipleChoice2Type1No4: string;
	answerMultipleChoice2Type1No5: string;
	answerMultipleChoice2Type1No6: string;
	answerMultipleChoice2Type1No7: string;
	answerMultipleChoice2Type2No1: string;
	answerMultipleChoice2Type2No2: string;
	answerMultipleChoice2Type2No3: string;
	answerMultipleChoice2Type2No4: string;
	answerMultipleChoice2Type2No5: string;
	answerMultipleChoice2Type2No6: string;
	answerMultipleChoice2Type2No7: string;
	answerMultipleChoice3Type1No1: string;
	answerMultipleChoice3Type1No2: string;
	answerMultipleChoice3Type1No3: string;
	answerMultipleChoice3Type1No4: string;
	answerMultipleChoice3Type1No5: string;
	answerMultipleChoice3Type1No6: string;
	answerMultipleChoice3Type1No7: string;
	answerMultipleChoice3Type2No1: string;
	answerMultipleChoice3Type2No2: string;
	answerMultipleChoice3Type2No3: string;
	answerMultipleChoice3Type2No4: string;
	answerMultipleChoice3Type2No5: string;
	answerMultipleChoice3Type2No6: string;
	answerMultipleChoice3Type2No7: string;
	answerShortAnswer1TypeNo1: string;
	answerShortAnswer1TypeNo2: string;
	answerShortAnswer2TypeNo1: string;
	answerShortAnswer2TypeNo2: string;
	answerShortAnswer3TypeNo1: string;
	answerShortAnswer3TypeNo2: string;
	fullName: string;
	nrp: string;
};

const columnHelper = createColumnHelper<Person>();

export const Columns = [
	columnHelper.accessor("fullName", {
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
			columnHelper.accessor((row) => row.answerMultipleChoice1Type1No1, {
				id: "answerMultipleChoice1Type1No1",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 1</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice1Type1No2, {
				id: "answerMultipleChoice1Type1No2",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 2</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice1Type1No3, {
				id: "answerMultipleChoice1Type1No3",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 3</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice1Type1No4, {
				id: "answerMultipleChoice1Type1No4",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 4</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice1Type1No5, {
				id: "answerMultipleChoice1Type1No5",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 5</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice1Type1No6, {
				id: "answerMultipleChoice1Type1No6",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 6</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice1Type1No7, {
				id: "answerMultipleChoice1Type1No7",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 7</span>,
			}),
		],
	}),
	columnHelper.group({
		id: "Existing Business: Mining Contractor (2)",
		header: () => {
			return <span style={{ lineHeight: "21px" }}> Existing Busines Mining Contractor (2)</span>;
		},
		columns: [
			columnHelper.accessor((row) => row.answerMultipleChoice1Type2No1, {
				id: "answerMultipleChoice1Type2No1",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 1</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice1Type2No2, {
				id: "answerMultipleChoice1Type2No2",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 2</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice1Type2No3, {
				id: "answerMultipleChoice1Type2No3",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 3</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice1Type2No4, {
				id: "answerMultipleChoice1Type2No4",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 4</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice1Type2No5, {
				id: "answerMultipleChoice1Type2No5",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 5</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice1Type2No6, {
				id: "answerMultipleChoice1Type2No6",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 6</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice1Type2No7, {
				id: "answerMultipleChoice1Type2No7",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 7</span>,
			}),
		],
	}),
	columnHelper.accessor("answerShortAnswer1TypeNo1", {
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
		header: () => <span>isian</span>,
	}),
	columnHelper.accessor("answerShortAnswer1TypeNo2", {
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
		header: () => <span>alasan</span>,
	}),
	columnHelper.group({
		id: "Future Business: Dealership (1)",
		header: () => {
			return <span style={{ lineHeight: "21px" }}> Future Business: Dealership (1)</span>;
		},
		columns: [
			columnHelper.accessor((row) => row.answerMultipleChoice2Type1No1, {
				id: "answerMultipleChoice2Type1No1",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 1</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice2Type1No2, {
				id: "answerMultipleChoice2Type1No2",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 2</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice2Type1No3, {
				id: "answerMultipleChoice2Type1No3",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 3</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice2Type1No4, {
				id: "answerMultipleChoice2Type1No4",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 4</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice2Type1No5, {
				id: "answerMultipleChoice2Type1No5",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 5</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice2Type1No6, {
				id: "answerMultipleChoice2Type1No6",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 6</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice2Type1No7, {
				id: "answerMultipleChoice2Type1No7",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 7</span>,
			}),
		],
	}),
	columnHelper.group({
		id: "Future Business: Dealership (2)",
		header: () => {
			return <span style={{ lineHeight: "21px" }}> Future Business: Dealership (2)</span>;
		},
		columns: [
			columnHelper.accessor((row) => row.answerMultipleChoice2Type2No1, {
				id: "answerMultipleChoice2Type2No1",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 1</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice2Type2No2, {
				id: "answerMultipleChoice2Type2No2",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 2</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice2Type2No3, {
				id: "answerMultipleChoice2Type2No3",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 3</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice2Type2No4, {
				id: "answerMultipleChoice2Type2No4",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 4</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice2Type2No5, {
				id: "answerMultipleChoice2Type2No5",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 5</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice2Type2No6, {
				id: "answerMultipleChoice2Type2No6",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 6</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice2Type2No7, {
				id: "answerMultipleChoice2Type2No7",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 7</span>,
			}),
		],
	}),
	columnHelper.accessor("answerShortAnswer2TypeNo1", {
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
		header: () => <span>isian</span>,
	}),
	columnHelper.accessor("answerShortAnswer2TypeNo2", {
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
		header: () => <span>alasan</span>,
	}),
	columnHelper.group({
		id: "Future Business: Mining Concession (1)",
		header: () => {
			return <span style={{ lineHeight: "21px" }}> Future Business: Mining Concession (1)</span>;
		},
		columns: [
			columnHelper.accessor((row) => row.answerMultipleChoice3Type1No1, {
				id: "answerMultipleChoice3Type1No1",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 1</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice3Type1No2, {
				id: "answerMultipleChoice3Type1No2",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 2</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice3Type1No3, {
				id: "answerMultipleChoice3Type1No3",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 3</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice3Type1No4, {
				id: "answerMultipleChoice3Type1No4",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 4</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice3Type1No5, {
				id: "answerMultipleChoice3Type1No5",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 5</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice3Type1No6, {
				id: "answerMultipleChoice3Type1No6",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 6</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice3Type1No7, {
				id: "answerMultipleChoice3Type1No7",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 7</span>,
			}),
		],
	}),
	columnHelper.group({
		id: "Future Business: Mining Concession (2)",
		header: () => {
			return <span style={{ lineHeight: "21px" }}> Future Business: Mining Concession (2)</span>;
		},
		columns: [
			columnHelper.accessor((row) => row.answerMultipleChoice3Type2No1, {
				id: "answerMultipleChoice3Type2No1",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 1</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice3Type2No2, {
				id: "answerMultipleChoice3Type2No2",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 2</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice3Type2No3, {
				id: "answerMultipleChoice3Type2No3",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 3</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice3Type2No4, {
				id: "answerMultipleChoice3Type2No4",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 4</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice3Type2No5, {
				id: "answerMultipleChoice3Type2No5",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 5</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice3Type2No6, {
				id: "answerMultipleChoice3Type2No6",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 6</span>,
			}),
			columnHelper.accessor((row) => row.answerMultipleChoice3Type2No7, {
				id: "answerMultipleChoice3Type2No7",
				cell: (info) => info.getValue(),
				header: () => <span>pilihan 7</span>,
			}),
		],
	}),
	columnHelper.accessor("answerShortAnswer3TypeNo1", {
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
		header: () => <span>isian</span>,
	}),
	columnHelper.accessor("answerShortAnswer3TypeNo2", {
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
		header: () => <span>alasan</span>,
	}),
];
