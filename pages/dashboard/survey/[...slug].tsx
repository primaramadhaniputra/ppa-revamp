import Loading from "atoms/Loading";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSetParticipants } from "recoil/participants/atom";
import { getCriticismReport, getDetailCriteriaReport, getPartisipan } from "services/survey";
import { notify } from "utils/functions";
import { ISurveyReportCriteriaDetail, ISurveyReportCriticism } from "utils/interfaces";

const SurveyDetailView = dynamic(() => import("views/SurveyDetail"), {
	ssr: false,
	loading: () => <Loading />,
});

export default function SurveyDetailPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [reportDetail, setReportDetail] = useState<ISurveyReportCriteriaDetail[]>([]);
	const [criticism, setCriticism] = useState<ISurveyReportCriticism[]>([]);

	// const [meta, setMeta] = useState<IMeta>()
	const setPartisipan = useSetParticipants();

	const router = useRouter();
	const joinParams = (router.query.slug as string[])?.join("/");

	const getData = async () => {
		try {
			setIsLoading(true);
			const response = await axios.all([
				getDetailCriteriaReport({
					path: `${joinParams}`,
				}),
				getCriticismReport({
					path: `criticism-suggestions/${joinParams}`,
				}),
				getPartisipan({
					path: `participates/${joinParams}`,
					params: {
						page: 1,
						perPage: 99,
					},
				}),
			]);
			setReportDetail(response[0].data.data);
			setCriticism(response[1].data.data);
			// setMeta(response[2].data.meta)
			setPartisipan(response[2].data.data);
		} catch (error: any) {
			notify(error.message, "error");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (joinParams) {
			getData();
		}
	}, [router.query.slug]);

	if (isLoading) {
		return <Loading />;
	}

	return <SurveyDetailView dataReport={reportDetail!} criticism={criticism} />;
}
