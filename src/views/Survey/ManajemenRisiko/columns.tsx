import { Text } from "@hudoro/neron";
import { createColumnHelper } from "@tanstack/react-table";
import { IcEllipse } from "atoms/Icon";

export type Person = {
	// headerName: string;
	questionName: string;
	answerQuestionType1Branch1: number;
	answerQuestionType1Branch2: number;
	answerQuestionType2Branch1: number;
	answerQuestionType2Branch2: number;
	answerQuestionType3Branch1: number;
	answerQuestionType3Branch2: number;
};

const columnHelper = createColumnHelper<Person>();

export const Columns = [
	columnHelper.accessor("questionName", {
		cell: (info) => info.getValue(),
		footer: (props) => props.column.id,
		header: () => <span></span>,
	}),
	columnHelper.group({
		id: "Existing Business: Mining Contractor",
		header: () => {
			return (
				<>
					<span style={{ lineHeight: "21px", color: "#969696" }}>Existing Busines</span>
					<br />
					<span style={{ lineHeight: "21px" }}> Mining Contractor</span>
				</>
			);
		},
		columns: [
			columnHelper.accessor("answerQuestionType1Branch1", {
				cell: (info) => info.getValue(),
				header: () => (
					<Text variant="mute">
						Menurut anda, jenis risiko apa saja yang memiliki kemungkinan tinggi untuk terjadi, yang
						relevan dengan bisnis atau project PPA saat ini, sebagai mining contractor
					</Text>
				),
			}),
			columnHelper.accessor((row) => row.answerQuestionType1Branch2, {
				id: "visits",
				cell: (info) => info.getValue(),
				header: () => (
					<Text variant="mute">
						Menurut anda, jenis risiko apa saja yang dapat memberikan dampak (negatif atau positif)
						besar, yang relevan dengan bisnis atau project PPA saat ini, sebagai mining contractor.
					</Text>
				),
			}),
		],
	}),
	columnHelper.group({
		id: "Future Business: Dealership",
		header: () => {
			return (
				<>
					<span style={{ lineHeight: "21px", color: "#969696" }}>Future Business</span>
					<br />
					<span style={{ lineHeight: "21px" }}> Dealership</span>
				</>
			);
		},
		columns: [
			columnHelper.accessor("answerQuestionType2Branch1", {
				cell: (info) => info.getValue(),
				header: () => (
					<Text variant="mute">
						Menurut anda, jenis risiko apa saja yang memiliki kemungkinan tinggi untuk terjadi, yang
						relevan dengan bisnis PPA, sebagai dealership.
					</Text>
				),
			}),
			columnHelper.accessor((row) => row.answerQuestionType2Branch2, {
				id: "progress",
				cell: (info) => info.getValue(),
				header: () => (
					<Text variant="mute">
						Menurut anda, jenis risiko apa saja yang dapat memberikan dampak (negatif atau positif)
						besar, yang relevan dengan bisnis PPA, sebagai dealership.
					</Text>
				),
			}),
		],
	}),
	columnHelper.group({
		id: "Future Business: Mining Concession",
		header: () => {
			return (
				<>
					<span style={{ lineHeight: "21px", color: "#969696" }}>Future Business</span>
					<br />
					<span style={{ lineHeight: "21px" }}> Mining Contractor</span>
				</>
			);
		},
		columns: [
			columnHelper.accessor("answerQuestionType3Branch1", {
				cell: (info) => info.getValue(),
				header: () => (
					<Text variant="mute">
						Menurut anda, jenis risiko apa saja yang memiliki kemungkinan tinggi untuk terjadi, yang
						relevan dengan bisnis PPA, sebagai mining concession.
					</Text>
				),
			}),
			columnHelper.accessor((row) => row.answerQuestionType3Branch2, {
				id: "baca",
				cell: (info) => info.getValue(),
				header: () => (
					<Text variant="mute">
						Menurut anda, jenis risiko apa saja yang dapat memberikan dampak (negatif atau positif)
						besar, yang relevan dengan bisnis PPA, sebagai mining concession.
					</Text>
				),
			}),
		],
	}),
];
