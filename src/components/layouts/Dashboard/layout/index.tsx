// import { currentLoginPages } from "services/pages";
import Footer from "src/components/organism/Footer";
import Navbar2 from "src/components/organism/Navbar2";
import Head from "next/head";
import { ContentWrapper, Wrapper } from "./styles";
import "./styles.css";
import { useState } from "react";
import { useWindowSize } from "utils/functions";
import { Link } from "utils/dummy";

interface IProps {
	children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
	const [isShow, setIsShow] = useState(false);

	const { width } = useWindowSize();

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
			{width < 640 ? (
				<>
					<div className="hamburger-container shadow-md" onClick={() => setIsShow((prev) => !prev)}>
						<div className="slash-one"></div>
						<div className="slash-two"></div>
						<div className="slash-three"></div>
					</div>
					<div className={`menu-container  ${isShow ? "active" : null}`}>
						<div className="w-full mt-5">
							{Link.map((item, idx) => {
								return (
									<div
										key={idx}
										className="px-5  py-5 w-full border-4	"
										style={{ borderBottom: "2px solid white" }}
									>
										{!item.subMenu ? (
											<a
												href={`/dashboard/${item.title.toLowerCase()}`}
												className="font-montserrat"
											>
												{item.title}
											</a>
										) : (
											<p className="font-montserrat">{item.title}</p>
										)}
										{item.subMenu?.map((subMenu, idx) => (
											<div key={idx}>
												<a
													href={`/dashboard/${subMenu.subMenuLink}`}
													className="font-montserrat text-xs mt-3 ml-3 font-medium block"
												>
													- {subMenu.subMenuTitle}
												</a>
											</div>
										))}
									</div>
								);
							})}
						</div>
					</div>
				</>
			) : null}
			<Head>
				<title>PPA REVAMP</title>
			</Head>
			<Navbar2 />
			<ContentWrapper>{children}</ContentWrapper>
			<Footer type="dashboard" />
		</Wrapper>
	);
}
