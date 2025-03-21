import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const zenkakugothicnew = Zen_Kaku_Gothic_New({
	weight: "400",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Webマラカス - スマホで楽しむバーチャルマラカスアプリ",
	description: "Webマラカスは、スマートフォンを使ってどこでもマラカスを楽しむことができる革新的なアプリです。手軽に音楽のリズムを感じながら、軽量、ノーマル、スペシャルの各種マラカスを振ってみましょう。スマホを振るだけで本物のマラカスのような音が楽しめ、友達や家族とのパーティー、音楽のリズムトレーニング、リラクゼーションの時間など、さまざまなシーンで活躍します。Webマラカスで、いつでもどこでも音楽の喜びを手の中に。",
	metadataBase: new URL("https://web-maracas.vercel.app/"),
	verification: {
		google: "gfUcvJDVTZ_TsqowF39TrpzIQSf5_GIZoZ2i-QbCbIc",
	},
	appleWebApp: {
		capable: true,
		title: "Webマラカス - スマホで楽しむバーチャルマラカスアプリ",
		statusBarStyle: "black-translucent",
	  },
	  openGraph: {
		type: "website",
		title: "Webマラカス - スマホで楽しむバーチャルマラカスアプリ",
		description:
		  "Webマラカスは、スマートフォンを使ってどこでもマラカスを楽しむことができる革新的なアプリです。手軽に音楽のリズムを感じながら、軽量、ノーマル、スペシャルの各種マラカスを振ってみましょう。スマホを振るだけで本物のマラカスのような音が楽しめ、友達や家族とのパーティー、音楽のリズムトレーニング、リラクゼーションの時間など、さまざまなシーンで活躍します。Webマラカスで、いつでもどこでも音楽の喜びを手の中に。",
		siteName: "Webマラカス - スマホで楽しむバーチャルマラカスアプリ",
		images: [
		  {
			url: "/MaracasOGP.png",
		  },
		],
	  },
	  twitter: {
		card: "summary_large_image",
		title: "Webマラカス - スマホで楽しむバーチャルマラカスアプリ",
		description:
		  "Webマラカスは、スマートフォンを使ってどこでもマラカスを楽しむことができる革新的なアプリです。手軽に音楽のリズムを感じながら、軽量、ノーマル、スペシャルの各種マラカスを振ってみましょう。スマホを振るだけで本物のマラカスのような音が楽しめ、友達や家族とのパーティー、音楽のリズムトレーニング、リラクゼーションの時間など、さまざまなシーンで活躍します。Webマラカスで、いつでもどこでも音楽の喜びを手の中に。",
		images: "/MaracasOGP.png",
	  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ja'>
			<body
				className={`${zenkakugothicnew.className} bg-background dark:bg-darkbackground text-font dark:text-darkfont`}
			>
				<ChakraProvider>
					<GoogleAnalytics gaId="G-HTPY1W81KH" />
					<GoogleTagManager gtmId="GTM-HTPY1W81KH" />
					<Header />
					<main className='min-h-[calc(100svh-1.5rem)]'>
						<div className='md:max-w-[60%] max-w-[90%] m-auto pt-20'>{children}</div>
					</main>
					<Footer />
				</ChakraProvider>
			</body>
		</html>
	);
}
