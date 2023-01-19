import { GetServerSideProps, GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";

const SurveyDetailView = dynamic(() => import("views/SurveyDetail"), { ssr: false });

interface IProps {
	slug: string;
}

export default function SurveyDetailPage({ slug }: IProps) {
	return <SurveyDetailView slug={slug} />;
}

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext,
) => {
	const { slug } = context.query;
	try {
		return {
			props: {
				slug,
			},
		};
	} catch (error: any) {
		return {
			notFound: true,
		};
	}
};
