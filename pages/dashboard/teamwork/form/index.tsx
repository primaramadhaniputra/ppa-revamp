import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

const TeamWorkView = dynamic(() => import("views/TeamWork/Form"));

export default function TeamWorkPage() {
  return <TeamWorkView />;
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
