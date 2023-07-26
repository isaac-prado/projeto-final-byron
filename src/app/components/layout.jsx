import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

export const siteTitle = "Login Signup Nextjs";

export default function Layout({ pageTitle, children }) {
  const title = "Login Signup Nextjs";
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="description"
          content="VulcanWM's GuestBook"
        />
        <meta
          property="og:image"
          content="/logo.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content={siteTitle} />
        <meta name="robots" content="index, follow"/>
        <meta property="og:type" content="Website" />
        <title>{pageTitle}</title>

      </Head>
      
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}