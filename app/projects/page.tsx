import { title } from "@/components/primitives";
import { ProjectCard } from "@/components/projectcard";

export default function ProjectsPage() {
	return (
		<div className="">
			<h1 className={title()}>Projects</h1>
			<div className="flex flex-col flex-auto">
			<ProjectCard>
				<h1 className="flex font-semibold text-3xl ">amarteja.com</h1>
				<p>This is website that you are currently looking at. I wanted to have a place where I can gather all my projects at one place. and I have created my own website.</p>

			</ProjectCard>
			
			</div>
		</div>
	);
}
