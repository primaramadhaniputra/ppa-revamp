import Loading from "atoms/Loading";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { currentLoginPages } from "services/pages";
import { notify } from "utils/functions";

const LoginView = dynamic(() => import("views/Login"), { ssr: false, loading: () => <Loading /> });

export default function LoginPage() {
	const [id, setId] = useState();
	const [isLoading, setIsLoading] = useState(false);

	const getData = async () => {
		try {
			setIsLoading(true);
			const data = await currentLoginPages({
				path: "pages",
				params: {
					name: "LOGIN",
				},
			});
			const idLogin = data.data.data.pageId;
			setId(idLogin);
		} catch (error: any) {
			notify(error.message, "error");
		} finally {
			setIsLoading(false);
		}
	};
	useEffect(() => {
		getData();
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return <LoginView id={id || 1} />;
}
