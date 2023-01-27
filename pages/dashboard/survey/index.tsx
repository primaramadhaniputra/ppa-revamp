import Loading from "atoms/Loading";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { getSurveyCriteria } from "services/survey";
import { notify } from "utils/functions";
import { ISurveyPeriode } from "utils/interfaces";

const SurveyView = dynamic(() => import("views/Survey"), { ssr: false });

export default function SurveyPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [periode, setPeriode] = useState();

	console.log("rerenderere");
	const getData = async () => {
		try {
			setIsLoading(true);
			const response = await getSurveyCriteria({});

			setPeriode(
				response.data.data.map((item: ISurveyPeriode) => {
					return { id: item.id, label: item.season, values: item.id };
				}),
			);
		} catch (error: any) {
			notify(error.message, "error");
		} finally {
			setIsLoading(false);
		}
	};
	useEffect(() => {
		getData();
	}, []);

	if (isLoading || !periode) {
		return <Loading />;
	}
	return <SurveyView periode={periode!} />;
}
