import "../styles/globals.css";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Snackbar } from '@material-ui/core';

function MyApp({ Component, pageProps }) {
  const [message, setMessage] = useState('')

  return (
    <div className={styles.container}>
      < Snackbar
        open={!!message}
        autoHideDuration={6000}
        message={message}
        onClose={() => setMessage("")}
        anchorOrigin={{ vertical: 'top', horizontal: 'center', }}
      />

      <Head>
        <title>Private routing</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <main className={styles.main}>
        <Component {...pageProps} setMessage={setMessage} />
      </main>

      <footer className={styles.footer}>Private routing example</footer>
    </div>
  );
}

export default MyApp;
