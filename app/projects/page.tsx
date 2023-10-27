import { title } from "@/components/primitives";
import { ProjectCard } from "@/components/projectcard";

export default function ProjectsPage() {
	return (
		<div>
			<ProjectCard>
				<h1 className={title()}>Projects</h1>
			</ProjectCard>
		</div>
	);
}
