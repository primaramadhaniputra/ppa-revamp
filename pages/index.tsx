import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { currentLoginPages } from "services/pages";

const LoginView = dynamic(() => import("views/Login"), { ssr: false });

interface IProps {
	id: number;
}

export default function LoginPage({ id }: IProps) {
	return <LoginView id={id} />;
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const data = await currentLoginPages({
			path: "pages",
			params: {
				name: "LOGIN",
			},
		});
		const id = data.data.data.pageId;
		return {
			props: {
				id,
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
