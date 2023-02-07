import Loading from "atoms/Loading";
import dynamic from "next/dynamic";

const ReportView = dynamic(() => import("views/TeamWork/Report"), {
	ssr: false,
	loading: () => <Loading />,
});

export default function ReportPage() {
	return <ReportView />;
}
