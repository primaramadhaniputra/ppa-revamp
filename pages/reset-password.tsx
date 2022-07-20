import { GetServerSideProps, GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";

const ResetPasswordView = dynamic(() => import("views/ResetPassword"));

export default function ResetPasswordPage() {
  return <ResetPasswordView />;
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  console.log(context);
  try {
    return {
      props: {
        data: [],
      },
    };
  } catch (error: any) {
    return {
      notFound: true,
    };
  }
};
