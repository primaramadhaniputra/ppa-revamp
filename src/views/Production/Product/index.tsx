import { IProductionSites } from "utils/interfaces";
import Sites from "./Sites";
import TotalSites from "./TotalSites";

interface IProps {
	sites: IProductionSites[];
}

export default function Product({ sites }: IProps) {
	return (
		<>
			<TotalSites sites={sites} />
			<Sites sites={sites} />
		</>
	);
}
