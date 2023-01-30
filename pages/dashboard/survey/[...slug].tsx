import Loading from "atoms/Loading";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getDetailCriteriaReport } from "services/survey";
import { notify } from "utils/functions";
import { ISurveyReportCriteriaDetail } from "utils/interfaces";

const SurveyDetailView = dynamic(() => import("views/SurveyDetail"), { ssr: false });

export default function SurveyDetailPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [reportDetail, setReportDetail] = useState<ISurveyReportCriteriaDetail[]>([]);

	const router = useRouter();
	const joinParams = (router.query.slug as string[])?.join("/");

	const getData = async () => {
		try {
			setIsLoading(true);
			const response = await getDetailCriteriaReport({
				path: `${joinParams}`,
			});
			console.log("response", response);
			setReportDetail(response.data.data);
		} catch (error: any) {
			notify(error.message, "error");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	if (isLoading) {
		return <Loading />;
	}
	return <SurveyDetailView dataReport={reportDetail!} />;
}
