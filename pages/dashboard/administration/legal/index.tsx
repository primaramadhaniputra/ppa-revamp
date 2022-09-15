import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

const LegalView = dynamic(() => import("views/Administration/Legal"));

export default function LegalPage() {
	return <LegalView />;
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
