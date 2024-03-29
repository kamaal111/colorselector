import Head from "next/head";

import Footer from "./Footer";
import Header from "./Header";

import { makeAppArgumentURL } from "@/utils/urls";
import styles from "@/styles/components/Page.module.scss";

function Page({
  children,
  path,
  params,
}: {
  children: JSX.Element | JSX.Element[];
  path?: string;
  params?: Record<string, string>;
}) {
  const appArgumentURL = makeAppArgumentURL({ path, params });

  return (
    <>
      <Head>
        <title>Color Selector</title>
        <meta name="description" content="Color Selector" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="apple-itunes-app"
          content={`app-clip-bundle-id=io.kamaal.ColorPicker.Clip, app-id=1506270066, app-argument=${appArgumentURL.toString()}, app-clip-display=card`}
        />
        <meta property="og:image" content="./img/default_app_clip_header.jpg" />
      </Head>
      <div className={styles.app}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Page;
