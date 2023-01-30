import { GetServerSideProps, GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";
import { getDetailCriteriaReport } from "services/survey";
import { ISurveyReportCriteriaDetail } from "utils/interfaces";

const SurveyDetailView = dynamic(() => import("views/SurveyDetail"), { ssr: false });

interface IProps {
	dataReport: ISurveyReportCriteriaDetail[];
}

export default function SurveyDetailPage({ dataReport }: IProps) {
	return <SurveyDetailView dataReport={dataReport} />;
}

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext,
) => {
	const { slug } = context.query;
	const joinParams = (slug as string[])?.join("/");
	try {
		const response = await getDetailCriteriaReport({
			path: `${joinParams}`,
		});

		return {
			props: {
				dataReport: response.data.data,
			},
		};
	} catch (error: any) {
		return {
			notFound: true,
		};
	}
};
