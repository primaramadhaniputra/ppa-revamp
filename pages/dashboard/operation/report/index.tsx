import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

const OperationView = dynamic(() => import("views/Operation"));

export default function OperationPage() {
  return <OperationView />;
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
