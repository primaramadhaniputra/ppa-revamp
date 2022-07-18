import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { useSetSystemType } from "recoil/SystemType/atom";

const SystemView = dynamic(() => import("views/System"));

export default function SystemPage() {
  const setSystemType = useSetSystemType();
  setSystemType("vhms_download");
  return <SystemView pageTitle="System / VHMS Donwload" type="vhms_download" />;
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
