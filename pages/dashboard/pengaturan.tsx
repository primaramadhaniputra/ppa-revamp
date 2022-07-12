import { GetServerSideProps, GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";
import { getProfile } from "services/users";

const PengaturanView = dynamic(() => import("views/Pengaturan"));

export default function PengaturanPage() {
  return <PengaturanView />;
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const dataUser = await getProfile({
      path: "profile",
      context,
    });
    console.log("ini data usersss", dataUser.data.data);
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
