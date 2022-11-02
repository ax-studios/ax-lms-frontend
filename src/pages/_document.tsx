import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

export class MyDocment extends Document {
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/images/logo.svg" />

          <meta
            name="description"
            content="Open Source University LMS for Curriculum, Timetable, Examination, Fee (Cashless Campus), Infrastructure Management, and many more. Student can pay their Fees and Teacher can upload their notes"
          />

          <meta name="author" content="Ax Studios" />

          <meta name="robots" content="index, follow" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
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
