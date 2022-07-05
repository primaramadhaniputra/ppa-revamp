import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

const TableView = dynamic(() => import("views/Table"));

export default function TablePage() {
  return <TableView />;
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
