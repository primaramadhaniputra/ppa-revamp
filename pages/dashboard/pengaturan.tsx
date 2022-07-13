import { ISelectItem } from "@hudoro/neron";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";
import { listPages } from "services/pages";

const PengaturanView = dynamic(() => import("views/Pengaturan"));

export default function PengaturanPage({ loginDefaultValue }: ISelectItem) {
  return <PengaturanView loginDefaultValue={loginDefaultValue} />;
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    // const dataUser = await getProfile({
    //   path: "profile",
    //   context,
    // });
    // console.log(dataUser)
    // listPages({
    //   path: 'settings/pages'
    const data = await listPages({
      path: "settings/pages",
      context,
    });
    const { id, pageId, status } = data.data.data.find(
      (item: { status: number }) => item.status === 1
    );
    const loginDefaultValue = {
      id,
      values: status.toString(),
      label: pageId.toString(),
    };
    return {
      props: {
        loginDefaultValue,
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
