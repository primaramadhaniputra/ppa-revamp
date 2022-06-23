import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

const HomeView = dynamic(() => import("views/Home"));

export default function HomePage() {
  return <HomeView />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    return {
      props: {
        pokemons: [],
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
