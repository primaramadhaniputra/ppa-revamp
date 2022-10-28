import dynamic from "next/dynamic";

const ReportView = dynamic(() => import("views/TeamWork/Report"), { ssr: false });

export default function ReportPage() {
	return <ReportView />;
}
