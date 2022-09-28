import TitlePage from "atoms/TitlePage";
import React from "react";
import Banner from "views/Home/Banner";
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
