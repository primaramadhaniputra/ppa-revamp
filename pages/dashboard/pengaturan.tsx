import { ISelectItem } from "@hudoro/neron";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";
import { listPages } from "services/pages";

const PengaturanView = dynamic(() => import("views/Pengaturan"));

export default function PengaturanPage({
  loginDefaultValue,
  navbarDefaultValue,
}: ISelectItem) {
  return (
    <PengaturanView
      loginDefaultValue={loginDefaultValue}
      navbarDefaultValue={navbarDefaultValue}
    />
  );
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

    const layoutLogin = data.data.data.filter(
      (item: { name: string }) => item.name === "LOGIN"
    );
    const layoutNavbar = data.data.data.filter(
      (item: { name: string }) => item.name === "NAVBAR"
    );

    const loginActive = layoutLogin.find(
      (item: { status: number }) => item.status === 1
    );
    const navbarActive = layoutNavbar.find(
      (item: { status: number }) => item.status === 1
    );

    // const loginDefaultValue = {
    //   id: loginActive.id,
    //   values: loginActive.status.toString(),
    //   label: loginActive.pageId.toString(),
    // };
    return {
      props: {
        loginDefaultValue: {
          id: loginActive.id,
          values: loginActive.status.toString(),
          label: loginActive.pageId.toString(),
        },
        navbarDefaultValue: {
          id: navbarActive.id,
          values: navbarActive.status.toString(),
          label: navbarActive.pageId.toString(),
        },
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
