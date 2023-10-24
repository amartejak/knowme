"use client";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import { Card } from "@/components/card";
import {motion} from 'framer-motion';

export default function Home() {
	return (
		<section className="">
			<div className="lg:flex h-screen">
				<div className = "flex flex-col lg:w-1/2 justify-center">
					<div className="self-center">
					<h1 className="text-center  tracking-tight font-semibold text-4xl lg:text-5xl">Hi, This is&nbsp;</h1>
					<h1 className="text-center  bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500 tracking-tight font-semibold text-4xl lg:text-5xl">Amar&nbsp;Teja Kommineni</h1>
					<h1 className="text-center  tracking-tight font-semibold text-4xl lg:text-5xl">
						Nice to meet you!
					</h1>
					<h2 className="pt-4 text-center tracking-tight text-xl lg:text-2xl">
						A Full Stack Developer, who loves to build things for the web.
					</h2>
					</div>
					<div className="flex pt-4 gap-2 justify-center py-2">
					<Link
						isExternal
						as={NextLink}
						href={siteConfig.links.docs}
						className={buttonStyles({ color:"primary", radius: "full", variant: "shadow", size:"lg"})}
						>
						Contact Me -{">"}
					</Link>
					<Link
						isExternal
						as={NextLink}
						className={buttonStyles({ variant: "bordered", radius: "full", size: "lg"})}
						href={siteConfig.links.github}
					>
						<GithubIcon size={20} /> Github
					</Link>
					</div>
				</div>
				<div className="flex justify-center lg:w-1/2" >
					<motion.div animate={{
						scale: [1, 2, 2, 1, 1],
						rotate: [0, 0, 270, 270, 0],
						borderRadius: ["20%", "20%", "50%", "50%", "20%"]
					}}
					transition={{
						duration: 2,
						ease: "easeInOut",
						times: [0, 0.2, 0.5, 0.8, 1],
						repeat: Infinity,
						repeatDelay: 1
					}} 
					className="w-32 h-32 self-center bg-gradient-to-r from-red-500 to-yellow-500 shadow-xl"
					>
					</motion.div>
				</div>
				</div>
				<div className="p-10 m-10">
					<div className="grid grid-cols-4 grid-rows-2 gap-4">
						<div className= ""><Card title="ReactJs"  alttext="reactjs svg" imageUrl="/react.svg" /></div>
						<div className= ""><Card title="NodeJs"  alttext="nodejs svg" imageUrl="nodejs.svg" /></div>
						<div className= ""><Card title="javascript" alttext="javascript svg" imageUrl="/js.svg" /></div>
						<div className= ""><Card title="html" alttext="html svg" imageUrl="/html.svg" /></div>
						<div className= ""><Card title="css" alttext="css svg" imageUrl="/css.svg" /></div>
						<div className= ""><Card title="AWS"  alttext="aws svg" imageUrl="/aws.svg" /></div>
						<div className= ""><Card title="Git"  alttext="git svg" imageUrl="/git.svg" /></div>
						<div className= ""><Card title="Python"  alttext="python svg" imageUrl="/python.svg" /></div>
						<div className= ""><Card title="Django"  alttext="Django svg" imageUrl="/django.svg" /></div>
						<div className= ""><Card title="Flask"  alttext="flask svg" imageUrl="/flask.svg" /></div>
						<div className= ""><Card title="Mongo DB"  alttext="mongodb svg" imageUrl="/mongodb.svg" /></div>
						<div className= ""><Card title="MYSQL"  alttext="mysql svg" imageUrl="/mysql.svg" /></div>
						<div className= ""><Card title="Linux"  alttext="linux png" imageUrl="/linux.png" /></div>
						<div className= ""><Card title="Flutter"  alttext="flutter svg" imageUrl="/flutter.svg" /></div>
					</div>
				</div>
			
		</section>
	);
}
