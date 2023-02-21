import Loading from "atoms/Loading";
import dynamic from "next/dynamic";
import { currentLoginPages } from "services/pages";
import { useAsync } from "utils/customHooks";
import { IPromiseResult } from "utils/interfaces";

const LoginView = dynamic(() => import("views/Login"), { ssr: false, loading: () => <Loading /> });

export default function LoginPage() {
	const { loading, response } = useAsync(
		() =>
			currentLoginPages({
				path: "pages",
				params: {
					name: "LOGIN",
				},
			}),
		[],
		true,
	);

	if (loading) {
		return <Loading />;
	}
	const id = (response as IPromiseResult)?.data.data.pageId;

	return <LoginView id={id || 0} />;
}
