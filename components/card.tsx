import React from 'react';
import Image from 'next/image';
import styles from './styles/glasscard.module.css';
import { ProjectCard } from './projectcard';

interface CardProps {
	title: string;
	alttext: string;
	imageUrl: string;
}

export const Card: React.FC<CardProps> = ({ title, alttext, imageUrl }) => {
	return (
		<div className="flex flex-col max-sm:min-w-[25vw] justify-center items-center max-md:min-w-[20vw] max-md:min-h-[20vh] lg:max-w-[20vw] lg:max-h-[20vw] bg-[rgba(255,255,255,0.1)] rounded-2xl p-2 m-2 shadow-lg transform hover:bg-zinc-600 dark:hover:bg-zinc-600 transition-all ease-in-out duration-500">
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


