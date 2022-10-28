import dynamic from "next/dynamic";

const SHEView = dynamic(() => import("views/SHE/Form"), { ssr: false });

export default function SHEPage() {
	return <SHEView />;
}
