import { GetServerSideProps, GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";
import { inputDropDownOperation2 } from "utils/dummy";
import { IDropdownData } from "utils/interfaces";

const OperationView = dynamic(() => import("views/Operation"));

interface IProps {
  defaultValue: IDropdownData;
  data: IDropdownData[];
  queryName: string;
}

export default function OperationPage({
  data,
  defaultValue,
  queryName,
}: IProps) {
  return (
    <OperationView
      data={data}
      defaultValue={defaultValue}
      queryName={queryName}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const isUrl = inputDropDownOperation2.find(
      (item) => item.values === context.query.name
    );
    if (!isUrl) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        defaultValue: isUrl,
        queryName: context.query.name,
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
