import { useEffect, useState } from "react";
import { currentLoginPages } from "services/pages";
import Footer from "src/components/organism/Footer";
import Navbar from "src/components/organism/Navbar";
import { notify } from "utils/functions";
import { ContentWrapper, Wrapper } from "./styles";

interface IProps {
	children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
	const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
	const [navbarPosition, setNavbarPosition] = useState<"start" | "center" | "end">("start");
	const handleChangeHamburgerMenu = () => {
		setShowHamburgerMenu(!showHamburgerMenu);
	};
	useEffect(() => {
		currentLoginPages({
			path: "pages",
			params: {
				name: "NAVBAR",
			},
		})
			.then((res) => {
				if (res.data.data.pageId === 1) {
					setNavbarPosition("start");
				} else if (res.data.data.pageId === 2) {
					setNavbarPosition("center");
				} else {
					setNavbarPosition("end");
				}
			})
			.catch((err) => notify(err.message, "error"));
	}, []);
	return (
		<Wrapper>
			<Navbar
				handleChangeHamburgerMenu={handleChangeHamburgerMenu}
				showHamburgerMenu={showHamburgerMenu}
				position={navbarPosition}
			/>
			<ContentWrapper>{children}</ContentWrapper>
			<Footer type="dashboard" />
		</Wrapper>
	);
}
