import Loading from "atoms/Loading";
import dynamic from "next/dynamic";

const ListSurveyView = dynamic(() => import("views/ListSurveys"), {
	ssr: false,
	loading: () => <Loading />,
});

export default function ListSurveyPage() {
	return <ListSurveyView />;
}
