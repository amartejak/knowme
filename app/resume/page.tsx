
export default function ResumePage() {
	return (
		<div className="flex justify-center">
			<embed 
				src={"/resume.pdf"} 
				type="application/pdf" 
				className="absolute inset-y-16 w-full h-full"
				/>
		</div>
	);
}
