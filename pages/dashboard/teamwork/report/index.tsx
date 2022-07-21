import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

const ReportView = dynamic(() => import("views/TeamWork/Report"));

export default function ReportPage() {
  return <ReportView />;
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
