import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

const ForgotPasswordView = dynamic(() => import("views/ForgotPassword"));

export default function ForgotPasswordPage() {
  return <ForgotPasswordView />;
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
      notFound: true,
    };
  }
};
