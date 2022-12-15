import React from "react";
import dynamic from "next/dynamic";

const Login6 = dynamic(() => import("src/components/layouts/Login/Login-6"), { ssr: false });
const Login51 = dynamic(() => import("src/components/layouts/Login/LOGIN4/Login-5.1"), { ssr: false });
const Login5 = dynamic(() => import("src/components/layouts/Login/LOGIN4/Login-5"), { ssr: false });
const Login41 = dynamic(() => import("src/components/layouts/Login/LOGIN4/Login-4.1"), { ssr: false });
const Login4 = dynamic(() => import("src/components/layouts/Login/LOGIN4/Login-4"), { ssr: false });
const Login1 = dynamic(() => import("src/components/layouts/Login/Login-1"), { ssr: false });
const Login2 = dynamic(() => import("src/components/layouts/Login/LOGIN2/Login-2"), { ssr: false });
const Login22 = dynamic(() => import("src/components/layouts/Login/LOGIN2/Login-2.2"), { ssr: false });
const Login3 = dynamic(() => import("src/components/layouts/Login/LOGIN3/Login-3"), { ssr: false });
const Login31 = dynamic(() => import("src/components/layouts/Login/LOGIN3/Login-3.1"), { ssr: false });

interface IProps {
	id: number;
}

export default function Home({ id }: IProps) {
	const renderLayout = () => {
		if (id === 1) {
			return <Login1 />;
		} else if (id === 2) {
			return <Login2 />;
		} else if (id === 3) {
			return <Login22 />;
		} else if (id === 4) {
			return <Login3 />;
		} else if (id === 5) {
			return <Login31 />;
		} else if (id === 6) {
			return <Login4 />;
		} else if (id === 7) {
			return <Login41 />;
		} else if (id === 8) {
			return <Login5 />;
		} else if (id === 9) {
			return <Login51 />;
		} else {
			return <Login6 />;
		}
	};

	return <>{renderLayout()}</>;
}
