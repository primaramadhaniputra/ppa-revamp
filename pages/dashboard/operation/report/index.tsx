import Loading from "atoms/Loading";
import dynamic from "next/dynamic";

const OperationView = dynamic(() => import("views/Operation/Report"), {
	ssr: false,
	loading: () => <Loading />,
});

export default function OperationPage() {
	return <OperationView />;
}
