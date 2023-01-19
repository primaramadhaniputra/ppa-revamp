import dynamic from "next/dynamic";

const SurveyView = dynamic(() => import("views/Survey"), { ssr: false });

export default function SurveyPage() {
	return <SurveyView />;
}
