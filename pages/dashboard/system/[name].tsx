import { GetServerSideProps, GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";
import { useSetSystemType } from "recoil/SystemType/atom";

const SystemView = dynamic(() => import("views/System"));

interface IProps {
	type: string;
}

export default function SystemPage({ type }: IProps) {
	const setSystemType = useSetSystemType();
	setSystemType("vhms_download");
	return <SystemView pageTitle={type} type={type} />;
}

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext,
) => {
	try {
		const type = context.query.name;
		return {
			props: {
				type,
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
