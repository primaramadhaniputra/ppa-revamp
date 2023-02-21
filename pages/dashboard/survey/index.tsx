import Loading from "atoms/Loading";
import dynamic from "next/dynamic";
import { useSetSurveyPeriode } from "recoil/surveyPeriode/atom";
import { getSurveyCriteria } from "services/survey";
import { useAsync } from "utils/customHooks";
import { IPromiseResult, ISurveyPeriode } from "utils/interfaces";

const SurveyView = dynamic(() => import("views/Survey"), {
	ssr: false,
	loading: () => <Loading />,
});

export default function SurveyPage() {
	const setPeriodes = useSetSurveyPeriode();

	const { loading, response } = useAsync(() => getSurveyCriteria({}), [], true);

	const newPeriodes = (response as IPromiseResult)?.data.data.map((item: ISurveyPeriode) => {
		return { id: item.id, label: item.season, values: item.id };
	});

	if (loading || !response || !newPeriodes) {
		return <Loading />;
	}
	setPeriodes(newPeriodes);

	return <SurveyView />;
}
