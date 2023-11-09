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
		<div className="flex flex-col max-sm:min-w-[20vw] justify-center items-center max-md:min-w-[20vw] max-md:min-h-[20vh] lg:max-w-[20vw] lg:max-h-[20vw] bg-transparent rounded-2xl p-2 m-2 shadow-lg dark:border dark:border-zinc-800 transform hover:bg-zinc-500 dark:hover:bg-zinc-800 transition-all ease-in-out duration-500">
			<Image
				src={imageUrl}
				alt={alttext}
				width={100}
				height={100}
				className=""
			/>
			<h2 className="mt-4 text-xl font-semibold max-sm:text-sm text-inherit">{title}</h2>
		</div>
	);
};


