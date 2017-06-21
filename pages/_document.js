import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head, errorHtml, chunks} = renderPage();
    return { html, head, errorHtml, chunks };
  }

  render () {
    return (
      <html>
        <Head>
        <link href="https://fonts.googleapis.com/css?family=Fjalla+One" rel="stylesheet" />
        <style>
          {`
            html {
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
              height: 100%;
              margin: 0;
            }
            body {
              font-family: 'Fjalla One', sans-serif;
              margin: 0;
              overflow-y: auto;
              background: linear-gradient(to bottom, #656f6f 0%, #405166 100%);
            }
          `}
        </style>
       </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </html>
   );
  }
}
