import TitlePage from "atoms/TitlePage";
import dynamic from "next/dynamic";
import React from "react";

const Banner = dynamic(() => import("./Banner"));

export default function Home() {
	return (
		<>
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				Dashboard - Site Multi Harapan Utama
			</TitlePage>
			<Banner />
		</>
	);
}
