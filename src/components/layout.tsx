import styles from "@/styles/Home.module.css";
import { Nunito_Sans } from "next/font/google";
import Head from "next/head";
import type { MetaHTMLAttributes } from "react";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
  metaTags?: MetaHTMLAttributes<HTMLMetaElement>[];
  title: string;
}

export default function Layout({ children, metaTags, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {metaTags &&
          metaTags.map((tag, index) => <meta key={index} {...tag} />)}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <main className={`${styles.main} ${nunitoSans.className}`}>
        {children}
      </main>
    </>
  );
}
