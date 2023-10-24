import React from 'react';
import Image from 'next/image';
interface CardProps {
	title: string;
	alttext: string;
	imageUrl: string;
}

export const Card: React.FC<CardProps> = ({ title, alttext, imageUrl }) => {
	return (
		// <div className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-500 border-default-100">
		// 	<img className="w-full" src={imageUrl} alt={title} />
		// 	<div className="px-6 py-4">
		// 		<div className="font-bold text-xl mb-2">{title}</div>
		// 		<p className="text-gray-700 text-base">{alttext}</p>
		// 	</div>
		// </div>
		<div className="flex flex-col bg-red-100 overflow-hidden rounded-lg p-4 transform hover:bg-yellow-500 transition-all ease-in-out duration-500">
			<Image
				src={imageUrl}
				alt={alttext}
				width={100}
				height={100}
				className="flex self-center bg-black"
			/>
			<h2 className="text-center text-xl font-normal text-white">{title}</h2>
		</div>
		// <div className="w-100 h-100 bg-white">
		// 	<div className="bg-gray-800 rounded-lg p-6 transform hover:bg-yellow-500 transition-all ease-in-out duration-500">
		//   		<div>
		// 			<Image src={imageUrl} alt={alttext} height={100} width={100} objectFit="contain" />
		//   		</div>
		//   		<h2 className="text-2xl font-normal text-white mt-4">{title}</h2>
		// 	</div>
	  	// </div>
	);
};


