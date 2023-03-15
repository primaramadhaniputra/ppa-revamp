import { Grid, Icon } from "@hudoro/neron";
import Link from "next/link";
import { useState } from "react";
import { useWindowSize } from "utils/functions";
import { Link as L } from "utils/dummy";
import {
	ContainerLinks,
	ContainerSubmenu,
	SingleLink,
	Styledtext,
	StyledTextSubmenu,
} from "../styles";

const Links = () => {
	const { width } = useWindowSize();
	const [activeSubmenu, setActiveSubmenu] = useState(-1);

	const handleShowSubMenu = (index: number) => {
		if (index === activeSubmenu) {
			return setActiveSubmenu(-1);
		}
		return setActiveSubmenu(index);
	};

	return (
		<ContainerLinks>
			{L.map((item, index) => (
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
	);
};

export default Links;
