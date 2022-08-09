import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

const ProductionView = dynamic(() => import("views/Production"));

export default function ProductionPage() {
  return <ProductionView />;
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
