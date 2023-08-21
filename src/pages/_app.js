import '@/styles/globals.css'
import {   Libre_Franklin } from "next/font/google"



import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";


config.autoAddCss = false;


const libreFranklin = Libre_Franklin({
  subsets: ["latin", 'latin-ext', 'vietnamese'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['italic', 'normal'],
  variable: '--font-libre_franklin',
});

export default function App({ Component, pageProps }) {
  return <main className={`$${libreFranklin.variable}`}>
    <Component {...pageProps} />
  </main>
}
