import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

const SystemView = dynamic(() => import("views/System"));

export default function SystemPage() {
  return <SystemView pageTitle="System / APP version control" />;
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
