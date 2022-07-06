import { GlobalStyle } from "atoms/GlobalStyles";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import "../styles/react-toastify.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  console.log(router.pathname);
  useEffect(() => {
    Array.from(
      document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')
    ).forEach((node) => {
      node.removeAttribute("data-n-p");
    });
    const mutationHandler = (mutations: any) => {
      mutations.forEach(({ target }: any) => {
        if (target.nodeName === "STYLE") {
          if (target.getAttribute("media") === "x") {
            target.removeAttribute("media");
          }
        }
      });
    };
    const observer = new MutationObserver(mutationHandler);
    observer.observe(document.head, {
      subtree: true,
      attributeFilter: ["media"],
    });
    return () => {
      observer.disconnect();
    };
  }, []);
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
