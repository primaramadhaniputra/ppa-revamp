// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();

    try {
      const originalRenderPage = ctx.renderPage;

      ctx.renderPage = () => {
        return originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });
      };

      const page = await ctx.renderPage();

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        ...page,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            // href="/favicons/apple-touch-icon.png"
            href="/favicon.ico"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            // href="/favicons/favicon-32x32.png"
            href="/favicon.ico"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            // href="/favicons/favicon-16x16.png"
            href="/favicon.ico"
          />
          <link
            rel="manifest"
            // href="/favicons/site.webmanifest"
            href="/favicon.ico"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
