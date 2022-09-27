import React from "react";
import { allSites, ITotalAllSites } from "utils/interfaces";
import Sites from "./Sites";
import TotalSites from "./TotalSites";

interface IProps {
	sites: allSites[];
	totalDataSites: ITotalAllSites;
}

export default function Product({ sites, totalDataSites }: IProps) {
	return (
		<>
			<TotalSites totalDataSites={totalDataSites} />
			<Sites sites={sites} />
		</>
	);
}
