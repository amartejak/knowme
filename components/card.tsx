import React from 'react';
import Image from 'next/image';
interface CardProps {
	title: string;
	alttext: string;
	imageUrl: string;
}

export const Card: React.FC<CardProps> = ({ title, alttext, imageUrl }) => {
	return (
		<div className="flex flex-col flex-shrink-0 justify-center items-center min-w-[20vw] min-h-[20vw] bg-[rgba(255,255,255,0.1)] rounded-2xl p-2 m-2 shadow-lg transform hover:bg-gray-500 transition-all ease-in-out duration-500">
			<Image
				src={imageUrl}
				alt={alttext}
				width={100}
				height={100}
				className=""
			/>
			<h2 className="mt-4 text-xl font-semibold text-inherit">{title}</h2>
		</div>
	);
};


