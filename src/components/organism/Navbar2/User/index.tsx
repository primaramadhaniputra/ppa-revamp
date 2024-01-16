import { Avatar, Icon } from "@hudoro/neron";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getProfile } from "services/users";
import { notify } from "utils/functions";
import { ContainerUser } from "../styles";

const User = () => {
	const [userDropdown, setuserDropdown] = useState(false);
	const [userName, setUserName] = useState("Admin");
	const router = useRouter();

	useEffect(() => {
		getProfile({
			path: "profile",
		})
			.then((res) => setUserName(res.data.data.fullName.slice(0, 6)))
			.catch((err) => notify(err.message, "error"));
	}, []);

	const handleLogout = () => {
		Cookies.remove("token");
		router.replace("/");
		// return router.reload();
	};
	return (
		<ContainerUser>
			<div className="flex items-center gap-2" onClick={() => setuserDropdown((prev) => !prev)}>
				<p className="font-montserrat text-xs">{userName}</p>
				<Avatar
					src="/icons/tukang.jpg"
					size="m"
					style={{ height: "35px", width: "35px" }}
					alt="user image"
				/>
				<Icon iconName="IcArrowDown" color="white" />
			</div>
			<div
				className={`absolute  bg-cyan-500 w-full rounded-md shadow-md flex flex-col min-w-36 left-[-45px] overflow-hidden transition ${
					userDropdown ? "translate-y-[78%]" : "translate-y-[60%]"
				} ${userDropdown ? "scale-100" : "scale-0"} ${userDropdown ? "opacity-1" : "opacity-0"}`}
				style={{ border: "1px solid rgb(40, 176, 213)" }}
			>
				<Link href="/dashboard/pengaturan" passHref>
					<p className="font-montserrat text-sm font-medium transition hover:bg-cyan-700 py-2 px-2">
						Pengaturan
					</p>
				</Link>
				<p
					onClick={handleLogout}
					className="font-montserrat text-sm font-medium transition hover:bg-cyan-700 py-2 px-2"
				>
					Logout
				</p>
			</div>
		</ContainerUser>
	);
};

export default User;
