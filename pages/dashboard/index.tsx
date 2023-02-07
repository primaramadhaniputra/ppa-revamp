import Loading from "atoms/Loading";
import dynamic from "next/dynamic";

const HomeView = dynamic(() => import("views/Home"), {
	ssr: false,
	loading: () => <Loading />,
});

export default function HomePage() {
	return <HomeView />;
}
