import { title } from "@/components/primitives";
import { ProjectCard } from "@/components/projectcard";

export default function ProjectsPage() {
	return (
		<div className="">
			<h1 className={title()}>Projects</h1>
			<div className="flex flex-col flex-auto">
			<ProjectCard>
				<h1 className="flex font-semibold text-3xl border-b border-zinc-800">portfolio</h1>
				<p className="text-zinc-400">This is website that you are currently looking at. <br />I wanted to have a place where I can gather all my projects at one place.<br /> and I have created my own website.</p>

			</ProjectCard>
			
			</div>
		</div>
	);
}
