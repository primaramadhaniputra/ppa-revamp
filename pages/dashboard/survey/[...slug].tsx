import Loading from "atoms/Loading";
import dynamic from "next/dynamic";

const SurveyDetailView = dynamic(() => import("views/SurveyDetail"), {
	ssr: false,
	loading: () => <Loading />,
});

export default function SurveyDetailPage() {
	return <SurveyDetailView />;
}
