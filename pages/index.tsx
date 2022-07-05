import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

const LoginView = dynamic(() => import("views/Login"));

export default function LoginPage() {
  return <LoginView />;
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
