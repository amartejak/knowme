export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="container mx-auto w-full">
			<div className="flex h-full">
			{/* <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900"> */}
				{children}
			</div>
		</section>
	);
}
 