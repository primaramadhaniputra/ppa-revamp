import dynamic from "next/dynamic";

const ProductionView = dynamic(() => import("views/Production"), { ssr: false });

export default function ProductionPage() {
	return <ProductionView />;
}
