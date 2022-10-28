import dynamic from "next/dynamic";

const SHEView = dynamic(() => import("views/SHE/Report"), { ssr: false });

export default function SHEPage() {
	return <SHEView />;
}
