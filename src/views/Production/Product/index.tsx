import React from "react";
import { allSites, ITotalAllSites } from "utils/interfaces";
import Sites from "./Sites";
import { ProductTitle } from "./styles";
import TotalSites from "./TotalSites";

interface IProps {
	sites: allSites[];
	totalDataSites: ITotalAllSites;
}

export default function Product({ sites, totalDataSites }: IProps) {
	return (
		<>
			<TotalSites totalDataSites={totalDataSites} />
			<ProductTitle>Sites</ProductTitle>
			<Sites sites={sites} />
		</>
	);
}
