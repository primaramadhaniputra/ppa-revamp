import { GlobalStyle } from "atoms/GlobalStyles";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ParallaxProvider } from "react-scroll-parallax";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import Layout from "src/components/layouts/Dashboard/layout";
import "../styles/globals.css";
import "../styles/react-toastify.css";

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
				<ParallaxProvider>
					{router.pathname === "/" || router.pathname === "/forgot-password" ? (
						<Component {...pageProps} />
					) : (
						<Layout>
							<Component {...pageProps} />
						</Layout>
					)}
				</ParallaxProvider>
			</RecoilRoot>
		</>
	);
}

export default MyApp;
