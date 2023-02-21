import Loading from "atoms/Loading";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useSetParticipants } from "recoil/participants/atom";
import { getCriticismReport, getDetailCriteriaReport, getPartisipan } from "services/survey";
import { useAsync } from "utils/customHooks";
import { IPromiseResult } from "utils/interfaces";

const SurveyDetailView = dynamic(() => import("views/SurveyDetail"), {
	ssr: false,
	loading: () => <Loading />,
});

export default function SurveyDetailPage() {
	// const [meta, setMeta] = useState<IMeta>()
	const setPartisipan = useSetParticipants();

	const router = useRouter();
	const joinParams = (router.query.slug as string[])?.join("/");

	const { loading, response } = useAsync(
		() =>
			axios.all([
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
			]),
		[router.query.slug],
		true,
	);

	if (loading || !response) {
		return <Loading />;
	}
	setPartisipan((response as IPromiseResult[])[2].data.data);
	return (
		<SurveyDetailView
			dataReport={(response as IPromiseResult[])[0].data.data}
			criticism={(response as IPromiseResult[])[1].data.data}
		/>
	);
}
