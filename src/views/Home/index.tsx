import dynamic from "next/dynamic";
import React from "react";
import TitleHome from "./TitleHome";

const Banner = dynamic(() => import("./Banner"), { ssr: false });

export default function Home() {
	return (
		<>
			<TitleHome />
			<Banner />
		</>
	);
}
