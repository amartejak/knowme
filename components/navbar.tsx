"use client";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import Image from "next/image";
import Link from 'next/link'
import {Link as Nlink} from "@nextui-org/link"
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
	Logo,
	TwitterIcon,
	GithubIcon,
	InstagramIcon,
	LinkedinIcon,
	SearchIcon,
	EmailIcon,
} from "@/components/icons";
import { useRouter, usePathname} from "next/navigation"

export const Navbar = () => {
	const router = useRouter()
	const pathname = usePathname()
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);

	return (
		<NextUINavbar isBordered maxWidth="2xl" position="sticky" className="bg-transperent fixed top-0">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<Link className="flex justify-start items-center gap-1" href="/">
						<Image src="/logo1.ico" alt="logo" width={50} height={50}/>
						<p className="font-bold text-inherit max-sm:hidden">AMAR TEJA KOMMINENI</p>
						<p className="font-bold text-inherit sm:hidden">AMAR KOMMINENI</p>
					</Link>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<Link
								className={pathname === item.href ? 'text-orange-600' : ''}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</Link>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden lg:flex items-center gap-3 justify-center py-2">
					<Link href={siteConfig.links.email} target="_blank" aria-label="Email">
						<EmailIcon className="text-default-500" />
					</Link>
					<Link href={siteConfig.links.linkedin} target="_blank" aria-label="Linkedin">
						<LinkedinIcon className="text-default-500" />
					</Link>
					<Link href={siteConfig.links.github} target="_blank" aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>
					<Link href={siteConfig.links.twitter} target="_blank" aria-label="Twitter">
						<TwitterIcon className="text-default-500" />
					</Link>
					<Link href={siteConfig.links.instagram} target="_blank" aria-label="Instagram">
						<InstagramIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
			</NavbarContent>

			<NavbarContent className="max-width:1024 lg:hidden basis-1 pl-4" justify="end">
				<Link href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500 max-sm:hidden" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle className="lg:hidden"/>
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					<NavbarMenuItem className="flex flex-row items-center gap-3 py-2">
						<Link href={siteConfig.links.email} target="_blank" aria-label="Email">
							<EmailIcon className="text-default-500" />
						</Link>
						<Link href={siteConfig.links.linkedin} target="_blank" aria-label="Linkedin">
							<LinkedinIcon className="text-default-500" />
						</Link>
						<Link href={siteConfig.links.github} target="_blank" aria-label="Github">
							<GithubIcon className="text-default-500" />
						</Link>
						<Link href={siteConfig.links.twitter} target="_blank" aria-label="Twitter">
							<TwitterIcon className="text-default-500" />
						</Link>
						<Link href={siteConfig.links.instagram} target="_blank" aria-label="Instagram">
							<InstagramIcon className="text-default-500" />
						</Link>
						<ThemeSwitch />
					</NavbarMenuItem>
					{siteConfig.navMenuItems.map((item) => (
						<NavbarMenuItem key={item.href}>
							<Nlink
								color="foreground"
								href={item.href}
								size="lg"
							>
								{item.label}
							</Nlink>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
