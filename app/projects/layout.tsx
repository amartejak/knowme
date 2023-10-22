export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 lg:py-8">
			<div className="inline-block max-w-xl text-center justify-center">
				{children}
			</div>
		</section>
	);
}
