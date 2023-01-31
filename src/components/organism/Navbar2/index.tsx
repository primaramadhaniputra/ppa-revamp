import { Avatar, Grid, Icon, Text } from "@hudoro/neron";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getProfile } from "services/users";
import { useWindowSize } from "utils/customHooks";
import { Link as Links } from "utils/dummy";
import { notify } from "utils/functions";
// import Link from 'next/link'
import {
	ContainerLinks,
	ContainerLogo,
	ContainerSubmenu,
	ContainerUser,
	SingleLink,
	Styledtext,
	StyledTextSubmenu,
	UserOverFlay,
	UserOverlayText,
	Wrapper,
} from "./styles";

const Navbar2 = () => {
	const [isShowMenu, setisShowMenu] = useState(false);
	const [activeSubmenu, setActiveSubmenu] = useState(-1);
	const [userDropdown, setuserDropdown] = useState(false);
	const [userName, setUserName] = useState("Dani");
	const { width } = useWindowSize();
	const router = useRouter();

	const handleShowMenu = () => {
		setisShowMenu(!isShowMenu);
	};
	const handleShowSubMenu = (index: number) => {
		if (index === activeSubmenu) {
			return setActiveSubmenu(-1);
		}
		return setActiveSubmenu(index);
	};

	const backToHome = () => {
		router.push("/dashboard");
	};

	useEffect(() => {
		getProfile({
			path: "profile",
		})
			.then((res) => setUserName(res.data.data.fullName.slice(0, 6)))
			.catch((err) => notify(err.message, "error"));
	}, []);

	return (
		<Wrapper showMenu={isShowMenu}>
			<ContainerLogo>
				<Avatar
					src="/logo/ppa.jpg"
					size="m"
					style={{ height: "35px", width: "35px", cursor: "pointer" }}
					alt="ppa logo"
					onClick={backToHome}
				/>
				{width < 1024 && (
					<Icon
						iconName="IcHamburger"
						size={32}
						color="white"
						style={{ cursor: "pointer" }}
						onClick={handleShowMenu}
					/>
				)}
			</ContainerLogo>
			<ContainerUser
				onMouseEnter={() => setuserDropdown(true)}
				onMouseLeave={() => setuserDropdown(false)}
			>
				{width > 1024 && <Text variant="p">{userName}</Text>}
				<Avatar
					src="/icons/tukang.jpg"
					size="m"
					style={{ height: "35px", width: "35px" }}
					alt="user image"
				/>
				<Icon iconName="IcArrowDown" color="white" />
				{userDropdown && (
					<UserOverFlay>
						<Link href="/dashboard/pengaturan" passHref>
							<UserOverlayText>Pengaturan</UserOverlayText>
						</Link>
						<Link href="/" passHref>
							<UserOverlayText>Logout</UserOverlayText>
						</Link>
					</UserOverFlay>
				)}
			</ContainerUser>
			{(width < 1024 && isShowMenu) || (
				<ContainerLinks>
					{Links.map((item, index) => (
						<SingleLink
							key={index}
							onMouseEnter={() => (width > 1024 ? handleShowSubMenu(index) : {})}
							onMouseLeave={() => (width > 1024 ? handleShowSubMenu(-1) : {})}
							onClick={() => (width > 1024 ? {} : handleShowSubMenu(index))}
						>
							<Grid container gap={3} alignItems="center" style={{ cursor: "pointer" }}>
								{item.subMenu ? (
									<Styledtext>{item.title}</Styledtext>
								) : (
									<Link href={`/dashboard/${item.title.toLowerCase()}`} passHref>
										<Styledtext>{item.title}</Styledtext>
									</Link>
								)}
								{item.subMenu && (
									<Icon
										iconName={activeSubmenu === index ? "IcArrowUp" : "IcArrowDown"}
										color="white"
									/>
								)}
							</Grid>
							<ContainerSubmenu activeSubMenu={activeSubmenu === index && true}>
								{item.subMenu?.map((data, idx) => (
									<Link href={`/dashboard/${data.subMenuLink}`} passHref key={idx}>
										<StyledTextSubmenu style={{ fontSize: "12px", cursor: "pointer" }}>
											{data.subMenuTitle}
										</StyledTextSubmenu>
									</Link>
								))}
							</ContainerSubmenu>
						</SingleLink>
					))}
				</ContainerLinks>
			)}
		</Wrapper>
	);
};

export default Navbar2;
