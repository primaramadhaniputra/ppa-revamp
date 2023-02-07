import Loading from "atoms/Loading";
import dynamic from "next/dynamic";

const TeamWorkView = dynamic(() => import("views/TeamWork/Form"), {
	ssr: false,
	loading: () => <Loading />,
});

export default function TeamWorkPage() {
	return <TeamWorkView />;
}
