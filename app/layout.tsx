import "../global.css";

import { Poppins } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	weight: ["300", "400", "500", "600"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={poppins.className}>
			<body style={{ margin: 0, padding: 0 }}>{children}</body>
		</html>
	);
}
