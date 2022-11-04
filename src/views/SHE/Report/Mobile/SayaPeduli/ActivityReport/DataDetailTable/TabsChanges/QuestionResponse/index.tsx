import { Grid, Lozenge } from "@hudoro/neron";
import React from "react";
import { fontWeights } from "utils/styles";
import { StyledText } from "../../styles";

const dataDummy = [
	{
		question: "Apakah Anda berstatus Kontak Erat atau Kasus Suspek atau Kasus Konfirmasi?",
	},
	{
		question:
			"Apakah Anda tinggal serumah dengan anggota keluarga, rekan, atau orang lain yang berstatus Kontak Erat atau Kasus Suspek atau Kasus Konfirmasi?",
	},
	{
		question: "Apakah suhu tubuh >37.5C?",
	},
	{
		question: "Apakah ada gejala batuk, pilek, dan/atau nyeri tenggorok?",
	},
	{
		question: "Apakah ada gejala sesak?",
	},
	{
		question: "Apakah Anda mengalami kehilangan indera penciuman?",
	},
	{
		question: "Apakah Anda mengalami kehilangan indera pengecapan?",
	},
	{
		question:
			"Apakah Anda mengalami gejala gangguan saluran pencernaan (contoh: mual, muntah, diare)?",
	},
];

const QuestionResponse = () => {
	return (
		<>
			{dataDummy.map((item, index) => (
				<Grid
					key={index}
					container
					alignItems="center"
					justifyContent="space-between"
					gap={10}
					style={{ border: "1px solid rgba(0,0,0,.1)", padding: "20px 10px" }}
				>
					<Grid style={{ flex: 1 }}>
						<StyledText style={{ fontWeight: fontWeights.regular }}>{item.question}</StyledText>
					</Grid>
					<Grid style={{ flex: 0 }}>
						<Lozenge label="tidak" variant="primary-light" />
					</Grid>
				</Grid>
			))}
		</>
	);
};

export default QuestionResponse;
