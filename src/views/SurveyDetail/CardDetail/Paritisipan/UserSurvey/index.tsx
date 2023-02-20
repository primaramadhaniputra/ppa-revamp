import { Grid } from "@hudoro/neron";
import React from "react";
import { IUserDetailPartisipanQuestions } from "utils/interfaces";
import HasilTest from "./HasilTest";
import KritikSaran from "./KritikSaran";

interface IProps {
	detailPartisipan: IUserDetailPartisipanQuestions[];
}

const UserSurvey = ({ detailPartisipan }: IProps) => {
	const kritikSaran = detailPartisipan.find((item) => item.name === "KRITIK & SARAN");
	return (
		<Grid>
			<KritikSaran kritikSaran={kritikSaran} />
			<HasilTest detailPartisipan={detailPartisipan} />
		</Grid>
	);
};

export default UserSurvey;
