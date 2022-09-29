import { GetServerSideProps, GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";

const ADMView = dynamic(() => import("views/Administration"));

interface IProps {
	id: string;
}

export default function ADMPage({ id }: IProps) {
	return <ADMView id={id} />;
}

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext,
) => {
	try {
		return {
			props: {
				id: context.query.id,
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
