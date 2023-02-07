import Loading from "atoms/Loading";
import dynamic from "next/dynamic";

const ProductionView = dynamic(() => import("views/Production"), {
	ssr: false,
	loading: () => <Loading />,
});

export default function ProductionPage() {
	return <ProductionView />;
}
