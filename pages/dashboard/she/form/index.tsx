import Loading from "atoms/Loading";
import dynamic from "next/dynamic";

const SHEView = dynamic(() => import("views/SHE/Form"), { ssr: false, loading: () => <Loading /> });

export default function SHEPage() {
	return <SHEView />;
}
