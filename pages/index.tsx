import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { currentLoginPages } from "services/pages";

const LoginView = dynamic(() => import("views/Login"), { ssr: false });

export default function LoginPage() {
	const [id, setId] = useState(1);
	const getData = async () => {
		try {
			const data = await currentLoginPages({
				path: "pages",
				params: {
					name: "LOGIN",
				},
			});
			const idLogin = data.data.data.pageId;
			setId(idLogin);
			return {
				props: {
					id: idLogin,
				},
			};
		} catch (error: any) {
			return {
				props: {
					pokemons: [],
				},
			};
		}
	};
	useEffect(() => {
		getData();
	}, []);
	return <LoginView id={id} />;
}
