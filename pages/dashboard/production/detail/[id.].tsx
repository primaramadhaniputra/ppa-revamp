import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

const ProductionDetail = dynamic(() => import("views/Production/Detail"));

export default function ProductionDetailPage() {
  return <ProductionDetail />;
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
