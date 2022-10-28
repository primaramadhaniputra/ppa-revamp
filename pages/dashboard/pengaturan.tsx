import { ISelectItem } from "@hudoro/neron";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";
import { useSetLoginDefaultValue } from "recoil/loginDefaultValue/atom";
import { useSetNavbarDefaultValue } from "recoil/navbarDefaultValue/atom";
import { listPages } from "services/pages";

const PengaturanView = dynamic(() => import("views/Pengaturan"), { ssr: false });

interface IProps {
	loginDefaultValue: ISelectItem | ISelectItem[];
	navbarDefaultValue: ISelectItem | ISelectItem[];
	isAdmin: boolean;
}

export default function PengaturanPage({ loginDefaultValue, navbarDefaultValue, isAdmin }: IProps) {
	const setLoginDefaultValue = useSetLoginDefaultValue();
	const setNavbarDefaultValue = useSetNavbarDefaultValue();

	setLoginDefaultValue(loginDefaultValue as ISelectItem[]);
	setNavbarDefaultValue(navbarDefaultValue as ISelectItem[]);
	return <PengaturanView isAdmin={isAdmin} />;
}

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext,
) => {
	try {
		const data = await listPages({
			path: "settings/pages",
			context,
		});
		if (data.data.status === "Unauthorized") {
			return {
				props: {
					isAdmin: false,
				},
			};
		}
		const layoutLogin = data.data.data.filter((item: { name: string }) => item.name === "LOGIN");
		const layoutNavbar = data.data.data.filter((item: { name: string }) => item.name === "NAVBAR");

		const loginActive = layoutLogin.find((item: { status: number }) => item.status === 1);
		const navbarActive = layoutNavbar.find((item: { status: number }) => item.status === 1);

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
				isAdmin: true,
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
