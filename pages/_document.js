import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <meta
            name="og:title"
            content="Gabriel Siedler - Full stack web developer"
          />
          <meta name="og:url" content="http://gabriel.siedler.ninja" />
          <meta
            name="og:site_name"
            content="Gabriel Siedler Personal Website"
          />
          <meta name="og:type" content="website" />
          <meta
            name="og:image"
            content="http://gabriel.siedler.ninja/static/images/og.jpg"
          />
          <meta
            name="og:description"
            content="Olá! I am Gabriel Siedler, a full stack web developer from Brazil."
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat|Roboto:300,400"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" href="/static/images/favicon.png" />

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
