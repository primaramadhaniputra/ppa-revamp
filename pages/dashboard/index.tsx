import dynamic from "next/dynamic";

const HomeView = dynamic(() => import("views/Home"), { ssr: false });

export default function HomePage() {
	return <HomeView />;
}
