import { title } from "@/components/primitives";

export default function ResumePage() {
	return (
		<div className="flex justify-center">
			<embed 
				src={"/res.pdf"} 
				type="application/pdf" 
				className="absolute inset-y-16 w-full h-full"
				/>
		</div>
	);
}
