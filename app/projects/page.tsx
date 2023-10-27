import { title } from "@/components/primitives";
import { ProjectCard } from "@/components/projectcard";

export default function ProjectsPage() {
	return (
		<div>
			<h1 className={title()}>Projects</h1>
			<ProjectCard>
				<h1 className="font-semibold">Projects1</h1>
			</ProjectCard>
		</div>
	);
}
