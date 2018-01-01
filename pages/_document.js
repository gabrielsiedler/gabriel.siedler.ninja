import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import './base.style';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>Gabriel Siedler</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta property="og:title" content="Gabriel Siedler - Full stack web developer" />
          <meta property="og:url" content="http://gabriel.siedler.ninja" />
          <meta property="og:site_name" content="Gabriel Siedler Personal Website" />
          <meta property="og:type" content="website" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat|Roboto:300,400" rel="stylesheet" />
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
