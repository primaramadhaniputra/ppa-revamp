import dynamic from "next/dynamic";

const OperationView = dynamic(() => import("views/Operation/AccessDataEntry"), { ssr: false });

export default function OperationPage() {
	return <OperationView />;
}
