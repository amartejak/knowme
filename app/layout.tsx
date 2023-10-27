import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import Link from 'next/link'
import clsx from "clsx";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
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
								<h2 className="text-5xl font-semibold bg-inherit">Contact Me</h2>
								<div className="text-center p-4 bg-gray-200">
									<div className="space-x-4">
									<a
										href="https://twitter.com/YourTwitterHandle"
										className="bg-blue-400 text-white font-medium px-4 py-2 rounded-full hover:bg-blue-500"
									>
										Twitter
									</a>
									<a
										href="https://linkedin.com/in/YourLinkedInProfile"
										className="bg-indigo-500 text-white font-medium px-4 py-2 rounded-full hover:bg-indigo-600"
									>
										LinkedIn
									</a>
									<a
										href="https://github.com/YourGitHubProfile"
										className="bg-gray-800 text-white font-medium px-4 py-2 rounded-full hover:bg-gray-900"
									>
										GitHub
									</a>
									</div>
								</div>							
								{/* <Link href={'mailto:amarteja2@outlook.com'}>Email</Link>
								<Link href={""}></Link> */}
								<span className="text-default-600">Thank For Visiting 😊 !</span>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
