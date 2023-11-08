import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import Link from 'next/link'
import clsx from "clsx";
import { ContactMe } from "@/components/contactme";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/logo1.ico",
		shortcut: "/logo1.ico",
		apple: "/logo1.ico",
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
					<div className="relative flex flex-col h-full dark:bg-gradient-to-r dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900 bg-gradient-to-r from-zinc-300 via-zinc-300 to-zinc-300">
						<Navbar />
						<main className="container mx-auto pt-16 px-2 flex-grow dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900 bg-gradient-to-r from-zinc-300 via-zinc-300 to-zinc-300">
							{children}
						</main>
						<footer id="footer" className="w-full flex flex-col items-center justify-center py-3 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900 bg-gradient-to-r from-zinc-300 via-zinc-300 to-zinc-300">
							<ContactMe />
								<span className="text-default-600">Thanks For Visiting 😊 !</span>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
