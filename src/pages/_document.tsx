import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

export class MyDocment extends Document {
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="shortcut icon"
            href="/meta/favicon-dark.svg"
            media="(prefers-color-scheme: dark)"
          />
          <link
            rel="shortcut icon"
            href="/meta/favicon-light.svg"
            media="(prefers-color-scheme: light)"
          />
          <link rel="apple-touch-icon" href="/icons/apple-icon.png" />
          <meta
            name="description"
            content="Open Source University LMS for Curriculum, Timetable, Examination, Fee (Cashless Campus), Infrastructure Management, and many more."
          />
          <meta name="theme-color" content="#3abff6" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="author" content="Ax Studios" />
          <meta name="robots" content="index, follow" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&display=swap"
            rel="stylesheet"
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

export default MyDocment;
