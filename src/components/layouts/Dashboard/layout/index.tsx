// import { currentLoginPages } from "services/pages";
import Footer from "src/components/organism/Footer";
import Navbar2 from "src/components/organism/Navbar2";
import Head from "next/head";
import { ContentWrapper, Wrapper } from "./styles";

interface IProps {
	children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
	// useEffect(() => {
	// 	currentLoginPages({
	// 		path: "pages",
	// 		params: {
	// 			name: "NAVBAR",
	// 		},
	// 	})
	// 		.then((res) => {
	// 			if (res.data.data.pageId === 1) {
	// 				setNavbarPosition("start");
	// 			} else if (res.data.data.pageId === 2) {
	// 				setNavbarPosition("center");
	// 			} else {
	// 				setNavbarPosition("end");
	// 			}
	// 		})
	// 		.catch((err) => notify(err.message, "error"));
	// }, []);
	return (
		<Wrapper>
			<Head>
				<title>PPA REVAMP</title>
			</Head>
			<Navbar2 />
			<ContentWrapper>{children}</ContentWrapper>
			<Footer type="dashboard" />
		</Wrapper>
	);
}
