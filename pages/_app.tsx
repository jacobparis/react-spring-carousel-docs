import type { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import { Header } from "templates/docs/Header";
import { Footer } from "templates/home/Footer";
import "src/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const isDocsPage = pathname.includes("/docs");

  if (isDocsPage) {
    return (
      <div>
        <Header />
        <Component {...pageProps} />;
        <Footer />
      </div>
    );
  }
  return <Component {...pageProps} />;
}
export default MyApp;
