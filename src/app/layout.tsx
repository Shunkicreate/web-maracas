import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const zenkakugothicnew = Zen_Kaku_Gothic_New({
	weight: "400",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Webマラカス",
	description: "スマホでマラカスを振って楽しもう",
	verification: {
		google: "gfUcvJDVTZ_TsqowF39TrpzIQSf5_GIZoZ2i-QbCbIc",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ja'>
			<body
				className={`${zenkakugothicnew.className} bg-background dark:bg-darkbackground text-font dark:text-darkfont`}
			>
				<ChakraProvider>
					<Header />
					<main className='h-[100svh]'>
						<div className='md:max-w-[60%] max-w-[90%] m-auto pt-20'>{children}</div>
					</main>
					<Footer />
				</ChakraProvider>
			</body>
		</html>
	);
}

