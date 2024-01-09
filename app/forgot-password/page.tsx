"use client";

import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { forgotPassword } from "services/users";
import { notify } from "utils/functions";

const page = () => {
	const [isLogin, setIsLogin] = useState(false);

	const handleSubmit = async (form: FormEvent<HTMLFormElement>) => {
		try {
			setIsLogin(true);
			form.preventDefault();
			const formData = new FormData(form.currentTarget);
			const email = formData.get("email");
			await forgotPassword({
				body: {
					email,
				},
				path: "/forgot-password",
			});
			return notify("Silahkan periksa email anda", "success");
		} catch (error: any) {
			return notify(error.message, "error");
		}
	};
	return (
		<div className="h-screen bg-[url('./public/images/bg.jpeg')] bg-no-repeat	bg-cover bg-center sm:p-28 	box-border min-h-[900px] px-5 py-20">
			<div className="h-full  box-border rounded-md bg-[url('./public/images/mobilProyek.jpg')] bg-no-repeat	bg-cover bg-center relative ">
				<div className="absolute rounded-md bg-gray-950/30 top-0 right-0 bottom-0 left-0 flex justify-between items-center sm:px-10 gap-5 ">
					<div className="bg-white h-[115%] flex-1 rounded-md shadow-md flex justify-between flex-col max-w-4xl mx-auto">
						<form onSubmit={handleSubmit}>
							<div className="m-auto mt-[10%] w-max">
								<Image alt="logo" src={"/logo/logo2.png"} width={350} height={100} />
							</div>
							<div>
								<p className="text-2xl font-[600] text-center mt-10 text-blue-800">Lupa Password</p>
								<p className="text-base font-[400] text-center mt-5 text-blue-900">
									Silahkan Masukkan Email
								</p>
							</div>
							<div className="px-10 mt-20 flex gap-5 flex-col">
								<div className="flex flex-col gap-1">
									<label htmlFor="nrp" className="text-base text-blue-900">
										Email
									</label>
									<input
										className="border rounded-md h-[48px] px-3 text-blue-900"
										name="email"
										type="email"
									/>
								</div>
								<Link href={"/"} className="text-xs text-blue-700 underline text-end">
									Login
								</Link>
								<button
									className={`${
										isLogin ? "bg-gray-500" : "bg-blue-500"
									} text-white text-sm py-2 mt-2 rounded-md h-[48px]`}
								>
									{isLogin ? "Mengirim..." : "Kirim"}
								</button>
							</div>
						</form>
						<div className=" flex items-center border-t-2 py-7 px-5 flex-col gap-5 text-sm">
							<Image alt="logo" src={"/images/footer.png"} width={120} height={100} quality={100} />
							<div className=" w-full flex items-center gap-x-5  gap-y-2 flex-wrap justify-center">
								<p className="text-purple-500">Devotion</p>
								<p className="text-red-500">Integrity</p>
								<p className="text-blue-500">TeamWork</p>
								<p className="text-orange-500">Creativity</p>
								<p className="text-yellow-500">Winner</p>
								<p className="text-green-500">Perfection</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
