import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { currentLoginPages } from "services/pages";

const LoginView = dynamic(() => import("views/Login"));

interface IProps {
	id: number;
}

export default function LoginPage({ id }: IProps) {
	return <LoginView id={id} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
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
