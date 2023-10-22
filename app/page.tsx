import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import { Card } from "@/components/card";

export default function Home() {
	return (
		
		<section className="">
			<div className="">
				<div className = "">
					<h1 className="text-center tracking-tight font-semibold text-4xl">Hi, This is </h1>
					<h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500 tracking-tight font-semibold text-4xl">Amar&nbsp;Teja&nbsp;Kommineni</h1>
					<h1 className="text-center tracking-tight font-semibold text-4xl">
						Nice to meet you!
					</h1>
					<h2 className="text-center tracking-tight text-xl">
						A Full Stack Developer, who loves to build things for the web.
					</h2>
					<Link
						isExternal
						as={NextLink}
						href={siteConfig.links.docs}
						className={buttonStyles({ color: "primary", radius: "full", variant: "shadow"})}
						>
						Contact Me
					</Link>
					<Link
						isExternal
						as={NextLink}
						className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={siteConfig.links.github}
					>
						<GithubIcon size={20} /> Github
					</Link>
				</div>
				<div className="bg-gray-500">
					amara
					<br />

					aa
					a
					a<br />
					a<br />
					a<br />
					a<br />
					<br />
					a<br />
					a<br /><br />
					a<br />
					a<br />
					a<br />
					a<br />
					<br />
					a<br />
					a<br />
					a<br />
					a<br />
					a<br />
					a<br />
					a<br />
					<br />
					<br />
					a<br />
					a<br />					
				</div>
			</div>
			{/* <div className=" bg-gray-600 flex-grid mb-4 grid-cols-5 grid-rows-5 gap-10">
				<div className= "mb-4 "><Card title="mycard1" description="samplecard" imageUrl="" /></div>
				<div className= "mb-4" ><Card title="mycard2" description="samplecard" imageUrl="" /></div>
				<div className= "mb-4" ><Card title="mycard3" description="samplecard" imageUrl="" /></div>
				<div className= "mb-4"><Card title="mycard4" description="samplecard" imageUrl="" /></div>
				<div className="row-start-2 mb-4"><Card title="mycard4" description="samplecard" imageUrl="" /></div>
				<div className="row-start-2 mb-4"><Card title="mycard5" description="samplecard" imageUrl="" /></div>
				<div className="row-start-2 mb-4"><Card title="mycard6" description="samplecard" imageUrl="" /></div>
				<div className="row-start-2 mb-4"><Card title="mycard8" description="samplecard" imageUrl="" /></div>
			</div> */}

		</section>
	);
}
