import { GlobalStyle } from "atoms/GlobalStyles";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import "../styles/react-toastify.css";

const Layout = dynamic(() => import("src/components/layouts/Dashboard/layout"), {
	ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	return (
		<>
			<ToastContainer
				draggable={false}
				position="bottom-left"
				autoClose={3000}
				newestOnTop={true}
				limit={3}
				pauseOnFocusLoss
			/>
			<GlobalStyle />
			<RecoilRoot>
				{router.pathname === "/" || router.pathname === "/forgot-password" ? (
					<Component {...pageProps} />
				) : (
					<Layout>
						<Component {...pageProps} />
					</Layout>
				)}
			</RecoilRoot>
		</>
	);
}

export default MyApp;
