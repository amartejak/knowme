export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Amar Teja Kommineni",
	description: "A Full Stack Developer, who loves to build things for the web and a Data Scientist",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Resume",
      href: "/docs",
    },
    {
      label: "Projects",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
    	{
      		label: "Resume",
      		href: "/resume",
    	},
    	{
      		label: "Projects",
      		href: "/projects",
    	},
    	{
      		label: "Blog",
      		href: "/blog",
    	},
    	{
      		label: "About",
      		href: "/about",
    	},
	],
	links: {
		github: "https://github.com/amartejak",
		twitter: "https://twitter.com/1Amarteja",
		docs: "https://nextui.org",
		instagram: "https://www.instagram.com/amarteja_kommineni",
    	sponsor: "https://patreon.com/jrgarciadev"
	},
};
