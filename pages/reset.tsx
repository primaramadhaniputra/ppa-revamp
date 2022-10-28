import { GetServerSideProps, GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";

const ResetPasswordView = dynamic(() => import("views/ResetPassword"), { ssr: false });

interface IProps {
	token: string;
}

export default function ResetPasswordPage({ token }: IProps) {
	return <ResetPasswordView token={token} />;
}

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext,
) => {
	const { token } = context.query;
	if (!token) {
		return {
			notFound: true,
		};
	}
	try {
		return {
			props: {
				token,
			},
		};
	} catch (error: any) {
		return {
			notFound: true,
		};
	}
};
