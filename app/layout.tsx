import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import Link from 'next/link'
import clsx from "clsx";
import Snavbar from "@/components/snav";
import { ContactMe } from "@/components/contactme";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/react.svg",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="container mx-auto pt-16 px-2 flex-grow">
							{children}
						</main>
						<footer id="footer" className="w-full flex flex-col items-center justify-center py-3">
							<ContactMe />
								<span className="text-default-600">Thank For Visiting 😊 !</span>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
