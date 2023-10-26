import { title } from "@/components/primitives";

export default function ResumePage() {
	return (
		<div className="flex justify-center w-screen h-screen">
			<embed 
				src={"/resume.pdf"} 
				type="application/pdf" 
				width="1000" 
				height="600" 
				/>
		</div>
	);
}
