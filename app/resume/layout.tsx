export default function ResumeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="container mx-auto w-full">
			<div className="flex items-center justify-center">
				{children}
			</div>
		</section>
	);
}
