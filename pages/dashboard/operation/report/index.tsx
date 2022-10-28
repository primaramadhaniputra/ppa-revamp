import dynamic from "next/dynamic";

const OperationView = dynamic(() => import("views/Operation/Report"), { ssr: false });

export default function OperationPage() {
	return <OperationView />;
}
