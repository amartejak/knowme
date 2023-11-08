import { title } from "@/components/primitives";
import { ProjectCard } from "@/components/projectcard";
import {
	TwitterIcon,
	GithubIcon,
	InstagramIcon,
	LinkedinIcon,
	ArrowIcon,
    EmailIcon,
} from "@/components/icons";
import Link from "next/link";

export default function ProjectsPage() {
	return (
		<div className="w-full h-full flex flex-col">
			<h1 className="text-bold text-5xl py-4 text-center text-zinc-400 my-4 border-b border-zinc-700">Projects</h1>
			<div className="grid grid-cols-1 mx-auto lg:grid-cols-2">
			<ProjectCard>
				<h1 className="font-semibold text-3xl text-center border-b py-2 m-2 border-zinc-800">Portfolio</h1>
				<p className="text-zinc-400 p-2 ">This is website that you are currently looking at. I wanted to have a place where, I can gather all my projects at one place and I have created my own website.</p>
				<Link
                href="https://github.com/amartejak/knowme.git"
                target="_blank"
                className="flex items-center justify-center text-inherit font-medium px-4 py-2 gap-2 rounded-full hover:border hover:border-zinc-700 hover:shadow-md hover:shadow-zinc-700/50"
            >
                <GithubIcon className='mr-1'/>Github -{'>'}
            </Link>
			</ProjectCard>
			<ProjectCard>
				<h1 className="text-center font-semibold text-3xl py-2 m-2 border-b border-zinc-800">Web Search Engine</h1>
				<p className="text-zinc-400 p-2">Built the niche crawler in python to crawl over the webpages and retrieve data. Done the indexing and processing of data retrieved. Built the search engine homepage using Java script, CSS, and html. Deployed the search engine on the web.</p>
				<Link
                href="https://github.com/amartejak/knowme.git"
                target="_blank"
                className="flex items-center justify-center text-inherit font-medium px-4 py-2 gap-2 rounded-full hover:border hover:border-zinc-700 hover:shadow-md hover:shadow-zinc-700/50"
            >
                <GithubIcon className='mr-1'/>Github -{'>'}
            </Link>
			</ProjectCard>
			<ProjectCard>
				<h1 className="text-center font-semibold text-3xl py-2 m-2 border-b border-zinc-800">ACM KITS Website </h1>
				<p className="text-zinc-400 p-2">I developed a dynamic website for Acm Kits. To post all event details and displaying about the ACM weekly events and Tech Talks. I developed it as complete dynamic website with admin panel so that every UI component can be manipulated by the admin itself without changing the code all time. 
				</p>
				<Link
                href="https://github.com/amartejak/knowme.git"
                target="_blank"
                className="flex items-center justify-center text-inherit font-medium px-4 py-2 gap-2 rounded-full hover:border hover:border-zinc-700 hover:shadow-md hover:shadow-zinc-700/50"
            >
                <GithubIcon className='mr-1'/>Github -{'>'}
            </Link>
			</ProjectCard>
			<ProjectCard>
				<h1 className="text-center font-semibold text-3xl py-2 m-2 border-b border-zinc-800">QR Bus Pass System</h1>
				<p className="text-zinc-400 p-2">This cross platform App which is built through Ionic framework. By using Ionic we can get a web app, android app, IOS app.	Made this app for the transport department.	Created a unique QR code for every person. Instead of carrying their physical pass they can just show QR code in the mobile. 
				</p>
				<Link
                href="https://github.com/amartejak/knowme.git"
                target="_blank"
                className="flex items-center justify-center text-inherit font-medium px-4 py-2 gap-2 rounded-full hover:border hover:border-zinc-700 hover:shadow-md hover:shadow-zinc-700/50"
            >
                <GithubIcon className='mr-1'/>Github -{'>'}
            </Link>
			</ProjectCard>
			</div>
		</div>
	);
}
