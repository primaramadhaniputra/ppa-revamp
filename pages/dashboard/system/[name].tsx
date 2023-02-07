import Loading from "atoms/Loading";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useSetSystemType } from "recoil/SystemType/atom";

const SystemView = dynamic(() => import("views/System"), {
	ssr: false,
	loading: () => <Loading />,
});

export default function SystemPage() {
	const setSystemType = useSetSystemType();
	const router = useRouter();
	setSystemType("vhms_download");
	return (
		<SystemView
			pageTitle={(router.query.name as string) || ""}
			type={(router.query.name as string) || ""}
		/>
	);
}
