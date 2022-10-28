import dynamic from "next/dynamic";

const TeamWorkView = dynamic(() => import("views/TeamWork/Form"), { ssr: false });

export default function TeamWorkPage() {
	return <TeamWorkView />;
}
