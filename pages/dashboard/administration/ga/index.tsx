import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

const GAView = dynamic(() => import("views/Administration/GA"));

export default function GAPage() {
	return <GAView />;
}

export const getServerSideProps: GetServerSideProps = async () => {
	try {
		return {
			props: {
				data: [],
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
