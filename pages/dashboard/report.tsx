import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

const ReportView = dynamic(() => import("views/Report"));

export default function ReportPage() {
  return <ReportView />;
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
