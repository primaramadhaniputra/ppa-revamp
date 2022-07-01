import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

const PengaturanView = dynamic(() => import("views/Pengaturan"));

export default function PengaturanPage() {
  return <PengaturanView />;
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
