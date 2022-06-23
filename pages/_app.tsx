import { GlobalStyle } from "atoms/GlobalStyles";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import "../styles/react-toastify.css";

function MyApp({ Component, pageProps }: AppProps) {
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
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
