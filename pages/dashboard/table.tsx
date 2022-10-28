import dynamic from "next/dynamic";

const TableView = dynamic(() => import("views/Table"), { ssr: false });

export default function TablePage() {
	return <TableView />;
}
