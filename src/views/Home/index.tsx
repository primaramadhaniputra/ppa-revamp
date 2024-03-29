import dynamic from "next/dynamic";
import React from "react";
// import UltimateInput from "src/components/organism/UltimateInput";
import TitleHome from "./TitleHome";

const Banner = dynamic(() => import("./Banner"), { ssr: false });

export default function Home() {
	return (
		<>
			{/* <UltimateInput isLabel={true} isInputSelect={true} /> */}
			<TitleHome />
			<Banner />
		</>
	);
}
