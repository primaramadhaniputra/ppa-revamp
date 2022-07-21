import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

const HCView = dynamic(() => import("views/Administration/HC"));

export default function HCPage() {
  return <HCView />;
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
