import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getPartisipan } from "services/survey";
import { notify } from "utils/functions";
import { IUserDetailPartisipanQuestions } from "utils/interfaces";
import { Container } from "./styles";
import UserProfile from "./UserProfile";
import UserSurvey from "./UserSurvey";

const Partisipan = () => {
	const [idDetailParticsipan, setIdDetailParticsipan] = useState<string>();
	const [detailPartisipan, setDetailPartisipan] = useState<IUserDetailPartisipanQuestions[]>();
	const router = useRouter();
	const query = (router.query.slug as string[])?.join("/");

	const handleGetDetailPartisipan = async (signal?: any) => {
		try {
			const reponse = await getPartisipan({
				path: `participates/${query}/${idDetailParticsipan}`,
				...(signal && { signal }),
			});
			setDetailPartisipan(reponse.data.data);
		} catch (error: any) {
			return notify(error.message, "error");
		}
	};

	useEffect(() => {
		setDetailPartisipan(undefined);
		const abortController = new AbortController();
		if (idDetailParticsipan) {
			handleGetDetailPartisipan(abortController.signal);
		}
		return () => abortController.abort();
	}, [idDetailParticsipan]);

	return (
		<Container>
			<UserProfile setIdDetailParticsipan={setIdDetailParticsipan} />
			{detailPartisipan && <UserSurvey detailPartisipan={detailPartisipan} />}
		</Container>
	);
};

export default Partisipan;
