import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

const SHEView = dynamic(() => import("views/SHE/Form"));

export default function SHEPage() {
  return <SHEView />;
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
